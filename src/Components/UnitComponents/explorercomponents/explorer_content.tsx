import { Routes, Route } from "react-router-dom";
import Explorer_empty from "./Explorer_content_components/explorer_empty";
import Explorer_quick_access from "./Explorer_content_components/explorer_quick_access";
import Explorer_desktop from "./Explorer_content_components/explorer_desktop";
import Explorer_links from "./Explorer_content_components/explorer_links";
import Explorer_tools from "./Explorer_content_components/explorer_tools";
import Explorer_thispc from "./Explorer_content_components/explorer_thispc";
import Explorer_projects from "./Explorer_content_components/explorer_projects";
import Explorer_denied from "./Explorer_content_components/explorer_denied";
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
        <Route path="/This_PC/Disk_C" element={<Explorer_denied />} />
        <Route path="/This_PC/Disk_D" element={<Explorer_denied />} />
        <Route path="/This_PC/Disk_E" element={<Explorer_denied />} />
        <Route path="/This_PC/Disk_F" element={<Explorer_denied />} />
        <Route path="/Desktop/Links" element={<Explorer_links />} />
        <Route path="/Desktop/Tools" element={<Explorer_tools />} />
        <Route path="/Desktop/Projects" element={<Explorer_projects />} />
      </Routes>
    </div>
  );
}

export default Explorer_content;
