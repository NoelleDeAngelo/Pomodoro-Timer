
import "./globals.css";


export const metadata = {
  title: "Pomodoro Timer",
  description: "Fun Pomodoro Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
