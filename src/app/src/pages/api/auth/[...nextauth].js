import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {label: 'email', type: 'email'},
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {

                 const res = await fetch('http://localhost:3000/login.json', {
                     method: 'POST',
                     body: JSON.stringify(credentials),
                     headers: {
                         'Content-Type': 'application/json'
                     },
                 });

                const user = await res.json();
                if (!res.ok) {
                    throw new Error(user.exception);
                }
                if (res.ok && user) {
                    return user;
                }
                return null;
            },
        })
    ],
    secret: "secret",
    jwt: {
        secret: "ksdkfsldferSDFSDFSDf",
        encryption: true,
    },
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
        error: '/auth/error', // Error code passed in query string as ?error=
        verifyRequest: '/auth/verify-request', // (used for check email message)
        newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    },
    callbacks: {
        async jwt({ token, user, account }) {
            if (user) {
                return {
                    ...token,
                    accessToken: user.data.token,
                    refreshToken: user.data.refreshToken,
                };
            }

            return token;
        },

        async session({ session, token }) {
            session.user.accessToken = token.accessToken;
            session.user.refreshToken = token.refreshToken;
            session.user.accessTokenExpires = token.accessTokenExpires;

            return session;
        },
    },
    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60,
    },
    debug: process.env.NODE_ENV === 'development',
});