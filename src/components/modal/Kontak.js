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
  
  const [loading, setLoading] = useState(false);

  async function insertData() {
    
    setLoading(true)
    setTimeout(() => {
      console.log('Loadingg....')
    }, 1000);

    
  }

  const [open, setOpen] = useState(false);
  
  return (
    <>
      <div onClick={() => setOpen(true)}>
        <p className="cursor-pointer">Contact</p>
      </div>
      <Dialog
        style={{
          width: '100%',
        }}
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">
          <div className="px-2">
            <p>Contact Me</p>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {
              <>
              <div className="lg:w-[500px] w-auto">
                <form action="" method="post" onSubmit={insertData} >
                  <div className=" p-2">
                    <table className=" w-[100%]  p-2 ">
                      <tr>
                        <input
                          name="name"
                          required
                          type="text"
                          placeholder="Nama"
                          className="p-2 border border-black w-[100%] placeholder:text-slate-500 text-black"
                        ></input>
                      </tr>
                      <tr>
                        <input
                          name="email"
                          required
                          type="email"
                          placeholder="Email"
                          className="p-2 border border-black mt-2 w-[100%] placeholder:text-slate-500 text-black"
                        ></input>
                      </tr>
                      <tr>
                        <textarea
                          name="message"
                          required
                          type="text"
                          placeholder="Pesan / Saran & Kritikan"
                          className="p-2 border border-black mt-2 h-20 w-[100%] placeholder:text-slate-500 text-black "
                        ></textarea>
                      </tr>
                      <tr>
                        <button onClick={insertData} className="bg-[#232946] text-white mt-2 flex py-2 w-full hover:shadow-lg duration-200">
                          
                            {
                              loading
                                ? <p className="mx-auto"> Loading .... </p>
                                : <p className="mx-auto"> Kirim </p>
                            }
                          
                        </button>
                      </tr>
                    </table>
                  </div>
                </form>
              </div>
            </>
            }
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <div className="justify-end mr-6">
            <Button
              
              style={{
                float: "left",
                backgroundColor: "#232946",
              }}
              onClick={() => setOpen(false)}
            >
              <p className="text-white">Close</p>
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Kontak;
