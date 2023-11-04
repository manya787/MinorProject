import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "../compo/Chatbox";
import MyChats from "../compo/MyChats";
import SideDrawer from "../compo/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box style={{display:"flex",justifyContent:"space-between",width:"100%",height:"91.5vh",padding:"10px"}}>
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;
