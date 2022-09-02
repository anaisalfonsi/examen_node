import express from "express";
import session from "express-session";

import { findAll, findOne } from "./models/User.js"

const router = express.Router();


router.get("/", async (req, res) =>{
    const users = await findAll();

    

    /* if (req.session) {
        console.log("logged in");
        return;
    } else {
        res.redirect("/register");

        return;
    } */

    res.render("home", { users });
});

/*

curl http://localhost:3002/delete/Alex
*/
/* router.get("/show/:name", async (req, res) =>{
    const { name } = req.params;
    const product = await find(name);

    res.json({ product });
}); */

/*


curl --request "DELETE" http://localhost:3002/delete/Alex
*/
/* router.delete("/delete/:name", async (req, res) =>{
    const { name } = req.params;
    const product = await remove(name);

    res.json({ name });
}); */

export default router;