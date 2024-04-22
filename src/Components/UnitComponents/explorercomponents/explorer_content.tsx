import { Routes, Route } from "react-router-dom";
import Explorer_empty from "./Explorer_content_components/explorer_empty";
import Explorer_quick_access from "./Explorer_content_components/explorer_quick_access";
import Explorer_desktop from "./Explorer_content_components/explorer_desktop";
import Explorer_links from "./Explorer_content_components/explorer_links";
import Explorer_tools from "./Explorer_content_components/explorer_tools";
import Explorer_thispc from "./Explorer_content_components/explorer_thispc";
function Explorer_content() {
  return (
    <div className="w-full bg-[#191919] p-2">
      <Routes>
        <Route path="*" element={<Explorer_quick_access />} />
        <Route path="/Quick_Access" element={<Explorer_quick_access />} />
        <Route path="/This_PC" element={<Explorer_thispc />} />
        <Route path="/Desktop" element={<Explorer_desktop />} />
        <Route path="/Downloads" element={<Explorer_empty />} />
        <Route path="/Documents" element={<Explorer_empty />} />
        <Route path="/Pictures" element={<Explorer_empty />} />
        <Route path="/Music" element={<Explorer_empty />} />
        <Route path="/Videos" element={<Explorer_empty />} />
        <Route path="/Disk_C" element={<Explorer_empty />} />
        <Route path="/Disk_D" element={<Explorer_empty />} />
        <Route path="/Disk_E" element={<Explorer_empty />} />
        <Route path="/Disk_F" element={<Explorer_empty />} />
        <Route path="/Desktop/Links" element={<Explorer_links />} />
        <Route path="/Desktop/Tools" element={<Explorer_tools />} />
      </Routes>
    </div>
  );
}

export default Explorer_content;
