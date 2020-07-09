export const environment = {
  production: false,
  angularToken: {
      apiBase:                    'http://localhost:3000/',
      apiPath:                    '',

      signInPath:                 'auth/sign_in',
      signInRedirect:             null,
      signInStoredUrlStorageKey:  null,

      signOutPath:                'auth/sign_out',
      validateTokenPath:          'auth/validate_token',
      signOutFailedValidate:      true,

      registerAccountPath:        'auth/',
      deleteAccountPath:          'auth/',
      registerAccountCallback:    window.location.href,

      updatePasswordPath:         'auth',
      resetPasswordPath:          'auth/password',
      resetPasswordCallback:      window.location.href,

      oAuthBase:                  'http://localhost:3000/',
      oAuthPaths: {
          facebook:                 'auth/facebook'
      },
      oAuthWindowType:            'newWindow',
      oAuthWindowOptions:         null,
  }
};

