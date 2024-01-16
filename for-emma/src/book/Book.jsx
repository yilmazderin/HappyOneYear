import React from 'react';
import "./book.css";

const Book = () => {
    return (
        <div>
            <input type="checkbox" id="checkbox-cover" />
            <div className="book">
                <div className="cover">
                    <label htmlFor="checkbox-cover"></label>
                </div>
                <div className="page"></div>
                <div className="back-cover"></div>
            </div>
        </div>
    );
}

export default Book;