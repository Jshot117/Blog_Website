import React, { useState } from 'react';

const NewsLetter = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const validEmail = (email: String) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validEmail(email)) {
            setError("Please enter a valid email");
            return;
        }
        console.log(email);
        setEmail("");
        setError("");
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        if (error) {
            setError("");
        }
    }
    return (
        <div className="flex justify-center pb-10">
            <form onSubmit={handleSubmit} className="  mx-auto md:size-fit">
                <div>{error && <p className="translate-y-8 translate-x-3 absolute text-red-500 mt-2">{error}</p>}</div>
                <div className="flex flex-row">
                    <div>
                        <input type="text" placeholder="Enter your email" value={email} onChange={handleChange} className="border rounded-l-md p-2" />
                    </div>
                    <div className="border-spacing bg-white rounded-r-md font-bold hover:opacity-55  ">
                        <input type="submit" value="Subscribe" className="p-2 cursor-pointer" />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default NewsLetter;