import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          scope: "https://www.googleapis.com/auth/userinfo.emailprofile",
        },
      },
    }),
    // ...add more providers here
  ],
  callbacks: {
    // profileをカスタマイズ
    async signIn({ profile }) {
      // ここにあなたのカスタム処理を記述
      const user = {
        id: profile.sub,
        name: profile.name,
        email: profile.email,
        image: profile.picture,
      };
      return user;
    },
    async session({ session, token, user }) {
      // セッションの処理
      return session;
    },
    async error(err) {
      console.error("認証エラー:", err.message); // 詳細なエラーメッセージを出力
      if (err.code === "CredentialsSignin") {
        return "/error/credentials"; // 認証情報エラーの場合、別のエラーページにリダイレクト
      } else {
        return "/error";
      }
    },
  },
};

export default NextAuth(authOptions);
