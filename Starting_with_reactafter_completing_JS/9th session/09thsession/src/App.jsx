// import "./App.css";
// // import {theme} from './context/theme'
// import { ThemeProvider } from "./context/Theme";

// function App() {
//   return (
//     <>
//       <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
//         <div className="flex flex-wrap min-h-screen items-center">
//           <div className="w-full">
//             <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
//               {/*theme btn  */}
//             </div>
//             <div className="w-full max-w-sm mx-auto">{/*card*/}</div>
//           </div>
//         </div>
//       </ThemeProvider>
//     </>
//   );
// }

// export default App;

import "./App.css";
import { ThemeProvider } from "./context/Theme";

function ThemeButton() {
  const { themeMode, darkTheme, lightTheme } = useTheme();

  return (
    <button
      onClick={themeMode === "light" ? darkTheme : lightTheme}
      className="px-4 py-2 bg-gray-800 text-white rounded"
    >
      {themeMode === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-wrap min-h-screen items-center bg-gray-100 dark:bg-gray-900">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
          </div>
          <div className="w-full max-w-sm mx-auto">
            {/* Card Component Here */}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
