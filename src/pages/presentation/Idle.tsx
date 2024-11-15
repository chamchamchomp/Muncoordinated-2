import BackgroundAnimDark from "./wallpaper";

//export default function Idle({ children }: { children: ReactNode }) {
//  return <h2>{children}</h2>;
//}
export default function Idle() {
  return (
    <div style={{ minHeight: '100vh', height: '100%', 'background': '#023E8A' }}>
      <BackgroundAnimDark />
    </div>
  );
}
