export const environment = {
    production: false,
    baseUiUrl: 'http://localhost:4200',
    redirectUrl: 'http://localhost:4200/auth/redirect',
    clientId: '159a2849-688d-4516-9f90-7880eda5894f',
    scope:
        'https://graph.microsoft.com/user.read',
    scopeManageAadApp: 'Application.ReadWrite.All',
    baseApiURL: 'http://localhost:8080/api/',
    scopeForSignIn: 'offline_access https://graph.microsoft.com/user.read'
};