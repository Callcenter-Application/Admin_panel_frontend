import { LeftSection } from "./letfSection";
import { RightSection } from "./rightSection";

export const Login = () => {
  return (
    <>
      <title>CallBook</title>

      <div className="min-h-screen overflow-x-hidden bg-background text-on-surface font-body-md antialiased selection:bg-surface-container selection:text-primary">
        <main className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-14">
          {/* Left Section */}
          <LeftSection/>

          {/* Right Section */}
          <RightSection/>
        </main>
      </div>
    </>
  );
};
