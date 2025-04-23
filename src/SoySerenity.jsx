import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

const products = [
  "Cinnamon", "Rose", "Eucalyptus/Citrus", "Orange Lemon", "Cinnamon Cloves",
  "Vanilla", "Activate Mood", "Jasmine", "Deep Breath", "Cinnamon Orange",
  "Lavender", "Lemon Rosemary", "Apple", "Vanilla Spice", "Clove", "Orange",
  "Lemon", "Eucalyptus", "Rosemary", "Mint", "Apple Cinnamon", "Back Yard",
  "Coffee", "Vanilla Coffee", "Tea Tree Blend", "Red Lava", "Watermelon", "Coconut Mahogany"
];

const scentColors = {
  Cinnamon: "#8B0000",
  Rose: "#FF007F",
  "Eucalyptus/Citrus": "#A8E6CF",
  "Orange Lemon": "#FFA500",
  "Cinnamon Cloves": "#5C4033",
  Vanilla: "#F3E5AB",
  "Activate Mood": "#FFD700",
  Jasmine: "#FFF8DC",
  "Deep Breath": "#ADD8E6",
  "Cinnamon Orange": "#D2691E",
  Lavender: "#E6E6FA",
  "Lemon Rosemary": "#FDFD96",
  Apple: "#FF0800",
  "Vanilla Spice": "#D2B48C",
  Clove: "#3E2723",
  Orange: "#FFA500",
  Lemon: "#FFF44F",
  Eucalyptus: "#ACE1AF",
  Rosemary: "#B4EEB4",
  Mint: "#98FF98",
  "Apple Cinnamon": "#B22222",
  "Back Yard": "#90EE90",
  Coffee: "#6F4E37",
  "Vanilla Coffee": "#C3B091",
  "Tea Tree Blend": "#C0D9AF",
  "Red Lava": "#FF4500",
  Watermelon: "#FC6C85",
  "Coconut Mahogany": "#8B5E3C"
};

const candleImg = "https://i.imgur.com/GFUzDJT.png";
const meltImg = "https://i.imgur.com/9gWqU79.png";

export default function SoySerenity() {
  return (
    <div className="bg-gradient-to-br from-amber-100 via-orange-200 to-yellow-100 min-h-screen text-gray-800 font-sans">
      <header className="text-center py-10 bg-white bg-opacity-70 shadow-md rounded-b-3xl">
        <h1 className="text-4xl font-bold">Soy Serenity</h1>
        <p className="text-lg mt-2">Hand-poured serenity in every flame. 100% Soy Candles and Melts</p>
      </header>

      <section id="products" className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((scent) => (
          <Card key={scent} className="bg-white/80 shadow-md rounded-xl">
            <CardContent className="flex flex-col items-center p-4">
              <div className="flex flex-row gap-4 items-center mb-2">
                <img
                  src={candleImg}
                  alt="Candle"
                  className="w-16 h-16 rounded-full border"
                  style={{ backgroundColor: scentColors[scent] || "#ccc" }}
                />
                <img
                  src={meltImg}
                  alt="Wax Melt"
                  className="w-16 h-16 rounded border"
                  style={{ backgroundColor: scentColors[scent] || "#ccc" }}
                />
              </div>
              <h2 className="text-xl font-semibold mb-1">{scent}</h2>
              <p>Candle - $7</p>
              <p>Wax Melt (6 cubes) - $4</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section id="order" className="p-6 bg-white bg-opacity-80 text-center rounded-t-3xl shadow-inner mt-10">
        <h2 className="text-2xl font-bold mb-2">How to Order</h2>
        <p className="mb-4">To place an order, contact us via email or message us on social media.</p>
        <Button className="bg-green-600 text-white hover:bg-green-700">Contact Us</Button>
      </section>

      <footer className="text-center text-sm py-4 bg-white bg-opacity-60 rounded-t-xl mt-6">
        &copy; {new Date().getFullYear()} Soy Serenity. All rights reserved.
      </footer>
    </div>
  );
}
