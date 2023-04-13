import React from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { useState } from "react";

function Kontak() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div onClick={() => setOpen(true)}>
        <p className="cursor-pointer">Contact</p>
      </div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">Kontak Saya</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div className="lg:mx-0 mx-auto">
              <p className="text-[#272343] px-1 text-left justify-start">
                Halo,kami ingin memberitahukan bahwa meskipun kami telah
                berusaha keras untuk memastikan aplikasi kami berjalan dengan
                baik, terkadang masih mungkin ada beberapa masalah atau bug yang
                terlewatkan. Kami ingin meminta maaf
              </p>
            </div>
            <br></br>
            <h2 className="px-1 text-rose-600">Selamat Bermain!</h2>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <div className="justify-end mr-4">
            <Button
              style={{
                float: "left",
                backgroundColor: "#ffd803",
              }}
              onClick={() => setOpen(false)}
            >
              <p className="text-black">Close</p>
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Kontak;
