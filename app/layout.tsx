// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import { ClerkProvider } from "@clerk/nextjs";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Admin Dashbord",
//   description: "Admin Dashbord",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <ClerkProvider>

//       <html lang="en">
//         <body className={inter.className}>{children}</body>
//       </html>
//     </ClerkProvider>
//   );
// }


// 8888888888888888888888888888888888888888888888888888
import type { Metadata } from "next";
import {
  ClerkProvider, SignInButton, SignedIn,SignedOut,UserButton,} from "@clerk/nextjs";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Admin Dashbord",
  description: "Admin Dashbord",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton/>
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
// lllllllllllllll


// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import { ClerkProvider } from "@clerk/nextjs";
// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "admin dashboard",
//   description: "admin dashboard",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <ClerkProvider>
//       <html lang="en">
// <body className={inter.className}>{children}</body>
//       </html>
//     </ClerkProvider>
//   );
// }