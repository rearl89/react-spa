import React from "react";

import { Layout } from "../layout";

const Home = () => (
    <Layout>
        <h1 className="text-2xl font-bold">Hello Tanya</h1>
        <p className="p-4">I love you so much!</p>
        <div className="flex justify-center">
            <img className="rounded-tl-3xl rounded-tr-lg rounded-bl-lg rounded-br-3xl" src="https://www.akc.org/wp-content/uploads/2017/11/Longhaired-Dachshund-standing-outdoors.jpg"/>
        </div>
    </Layout>
)

export default Home