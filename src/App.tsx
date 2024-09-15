import "./App.css";
import { lazy, Suspense } from "react";
const Homepage = lazy(() => import("./Components/homepage"));
const Lockscreen = lazy(() => import("./Components/lockscreen"));
function App() {
  return (
    <Suspense fallback={<p className="text-pink-600">LOADING</p>}>
      <div className="select-none">
        <Lockscreen />
        <Homepage />
      </div>
    </Suspense>
  );
}

export default App;
