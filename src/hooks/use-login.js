import React, { createContext, useReducer, useMemo, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage'

const actionType = {
  LOGIN_CHECK_SESSION: 'LOGIN_CHECK_SESSION',
  LOGIN_DID_SUCCESS: 'LOGIN_DID_SUCCESS',
  LOGOUT_DID_SUCCESS: 'LOGOUT_DID_SUCCESS'
};

const LoginContext = createContext();

export function LoginContextProvider(props) {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case actionType.LOGIN_CHECK_SESSION:
          return {
            ...prevState,
            loading: false,
            token: action.token
          };
        case actionType.LOGIN_DID_SUCCESS:
          return {
            ...prevState,
            token: action.token
          };
        case actionType.LOGOUT_DID_SUCCESS:
          return {
            ...prevState,
            token: null
          };
      }
    },
    {
      loading: true,
      token: null
    }
  );

  const action = useMemo(
    () => ({
      checkSession: () => {
        AsyncStorage.getItem('@token').then(token => {
          dispatch({ type: actionType.LOGIN_CHECK_SESSION, token: token });
        })
      },
      signIn: (token) => {
        AsyncStorage.setItem('@token', token).then(() => {
          dispatch({ type: actionType.LOGIN_DID_SUCCESS, token: token });
        })
      },
      signOut: () => {
        AsyncStorage.removeItem('@token').then(() => {
          dispatch({ type: actionType.LOGOUT_DID_SUCCESS });
        })
      }
    }),
    []
  );

  const login = () => {
    return {
      loginState: state,
      checkSession: action.checkSession,
      signIn: action.signIn,
      signOut: action.signOut
    };
  };

  return (
    <LoginContext.Provider value={login()}>
      {props.children}
    </LoginContext.Provider>
  );
}

export function useLogin() {
  return useContext(LoginContext);
}
