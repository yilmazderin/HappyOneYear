import React from 'react';
import "./book.css";

const Book = () => {
    return (
        <div>
            <input type="checkbox" id="checkbox-cover"/>
            <input type="checkbox" id="checkbox-page1"/>
            <input type="checkbox" id="checkbox-page2"/>
            <input type="checkbox" id="checkbox-page3"/>
            <div class="book">
                <div class="cover">
                    <i class="fa-solid fa-heart"></i>
                    <label htmlFor="checkbox-cover"></label>
                </div>
                <div class="page" id="page1">
                    <div class="front-page">
                        <div class="page-title">
                            <h3>Prequel</h3>
                        </div>
                        <div class="page-content">

                        </div>
                        <label class="next" for="checkbox-page1"><i class="fas fa-chevron-right"/></label>
                    </div>
                    <div class="back-page">
                        <div class="page-title"></div>
                        <div class="page-content"></div>
                        <label class="prev" for="checkbox-page1"><i class="fas fa-chevron-left"/></label>
                    </div>
                </div>

                <div class="page" id="page2">
                    <div class="front-page">
                        <div class="page-title">
                            <h3>Chapter 1</h3>
                        </div>
                        <div class="page-content">
                            <p>Dadada</p>
                        </div>
                        <label class="next" for="checkbox-page2"><i class="fas fa-chevron-right"/></label>
                    </div>
                    <div class="back-page">
                        <div class="page-title"></div>
                        <div class="page-content"></div>
                        <label class="prev" for="checkbox-page2"><i class="fas fa-chevron-left"/></label>
                    </div>
                </div>

                <div class="page" id="page3">
                    <div class="front-page">
                        <div class="page-title">
                            <h3>Chapter 2</h3>
                        </div>
                        <div class="page-content">
                            <p>Dada</p>
                        </div>
                        <label class="next" for="checkbox-page3"><i class="fas fa-chevron-right"/></label>
                    </div>
                    <div class="back-page">
                        <div class="page-title"></div>
                        <div class="page-content"></div>
                        <label class="prev" for="checkbox-page3"><i class="fas fa-chevron-left"/></label>
                    </div>
                </div>

                <div class="back-cover"></div>
            </div>
        </div>
    );
}

export default Book;