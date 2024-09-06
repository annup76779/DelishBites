import React, { useState } from "react";
import "./App.css";

function App() {
    //backend part

    //
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        meal: "",
    });
    const [message, setMessage] = useState({
        type: "success",
        message: "some Message",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    //connection backend to fruntend

    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert("Please enter a valid email");
        } else {
            try {
                const response = await fetch(
                    "http://localhost:8000/api/orders/submit-order",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(formData),
                    }
                );

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                setMessage({
                    type: "success",
                    message:
                        "Thanks for your order! Will call you back within 20mins.",
                });
            } catch (error) {
                console.error("Error:", error);
            }
        }
    };

    return (
        <div className="App">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">Welcome to DelishBites</h1>
                    <img
                        src="/logo.jpeg"
                        alt="DelishBites Logo"
                        className="glow-effect"
                    />
                    <button className="cta-button">Order Now</button>
                </div>
            </section>

            {/* Body Section */}
            <section className="body-section">
                <h2>Our Services</h2>
                <div className="services">
                    <div className="service glow-effect">
                        <img src="/food-icon1.png" alt="Food Delivery" />
                        <h3>Food Delivery</h3>
                    </div>
                    <div className="service glow-effect">
                        <img src="/food-icon2.png" alt="Menu Highlights" />
                        <h3>Menu Highlights</h3>
                    </div>
                    <div className="service glow-effect">
                        <img src="/food-icon3.png" alt="Chef Specials" />
                        <h3>Chef Specials</h3>
                    </div>
                </div>
            </section>

            {/* CTA Form */}
            <section className="cta-form">
                <h2>Book a Table or Order Now</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    <select
                        name="meal"
                        value={formData.meal}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Meal</option>
                        <option value="breakfast">Breakfast</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                    </select>
                    <button type="submit" className="cta-button">
                        Submit
                    </button>
                </form>
                {message.type && (
                    <span
                        style={{
                            color: message.type === "success" ? "green" : "red",
                            marginTop: "40px",
                            padding: "30px",
                            display: "block",
                        }}
                    >
                        {message.message}
                    </span>
                )}
            </section>
        </div>
    );
}

export default App;
