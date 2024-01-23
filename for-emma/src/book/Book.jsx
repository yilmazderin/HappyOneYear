import React from 'react';
import "./book.css";

const Book = () => {
    return (
        <div>
            <input type="checkbox" id="checkbox-cover"/>
            <input type="checkbox" id="checkbox-page1"/>
            <input type="checkbox" id="checkbox-page2"/>
            <input type="checkbox" id="checkbox-page3"/>
            <input type="checkbox" id="checkbox-page4"/>
            <input type="checkbox" id="checkbox-page5"/>
            <input type="checkbox" id="checkbox-page6"/>
            <input type="checkbox" id="checkbox-page7"/>
            <input type="checkbox" id="checkbox-page8"/>
            <input type="checkbox" id="checkbox-page9"/>
            <input type="checkbox" id="checkbox-page10"/>
            <input type="checkbox" id="checkbox-page11"/>
            <input type="checkbox" id="checkbox-page12"/>
            <input type="checkbox" id="checkbox-page13"/>

            <div class="book">
                <div class="cover">
                    <label htmlFor="checkbox-cover" class="cover-label">
                    <div class="heart"><i class="fa-solid fa-heart"></i></div>
                    </label>
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

                <div class="page" id="page4">
                    <div class="front-page">
                        <div class="page-title">
                            <h3>Chapter 3</h3>
                        </div>
                        <div class="page-content">
                            <p>Dada</p>
                        </div>
                        <label class="next" for="checkbox-page4"><i class="fas fa-chevron-right"/></label>
                    </div>
                    <div class="back-page">
                        <div class="page-title"></div>
                        <div class="page-content"></div>
                        <label class="prev" for="checkbox-page4"><i class="fas fa-chevron-left"/></label>
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