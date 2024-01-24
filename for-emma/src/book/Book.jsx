import React from 'react';
import "./book.css";
import Pic1 from "../assets/Pic1.png"
import Preq1 from "../assets/Prequel1.png"
import Preq2 from "../assets/Prequel2.png"

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
                            <h3>Acknowledgements</h3>
                        </div>
                        <div class="page-content">
                            <p>I dedicate this book to my ...</p>

                        </div>
                        <label class="next" for="checkbox-page1"><i class="fas fa-chevron-right"/></label>
                    </div>
                    <div class="back-page">
                        <div class="page-title">
                            <h3>To Emma...</h3>
                        </div>
                        <div class="page-content"></div>
                        <label class="prev" for="checkbox-page1"><i class="fas fa-chevron-left"/></label>
                    </div>
                </div>

                <div class="page" id="page2">
                    <div class="front-page">
                        <div class="page-title">
                            <h1>Prequel</h1>
                        </div>
                        <div class="page-timeline">
                            <h3>October 7 - January 28</h3>
                        </div>
                        <div class="page-content">
                            <p>One could consider this story to have 2 beginnings. 1 beginning could be when Emma came to Assumption and the couple first met each other. Or one could consider the beginning of this story to start when Emma couragousely decided to compliment Derin's outfit by DMing him.</p>
                            <div class = "imagesub" id="pic2">
                                <img src = {Preq1} alt="Preq5"/>
                                <p>Emma's first DM to Derin</p>
                            </div>
                        </div>
                        <label class="next" for="checkbox-page2"><i class="fas fa-chevron-right"/></label>
                    </div>
                    <div class="back-page">
                        <div class="page-content">
                            <p>Things really picked up when Emma decided to come to London and celebrate her favourite holiday with the guy she re-met last week. She made the smart decision of trusting him and having a sleepover.</p>
                            <div class = "imagesub1">
                                <img src = {Preq2} alt="Preq5"/>
                                <p>Derin and Emma dressed as painters for Halloween</p>
                            </div>
                        </div>
                        <label class="prev" for="checkbox-page2"><i class="fas fa-chevron-left"/></label>
                    </div>
                </div>

                <div class="page" id="page3">
                    <div class="front-page">
                        <div class="page-title">
                            <h3>Chapter 1</h3>
                        </div>
                        <div class="page-content">
                            
                        </div>
                        <label class="next" for="checkbox-page2"><i class="fas fa-chevron-right"/></label>
                    </div>
                    <div class="back-page">
                        <div class="page-title"></div>
                        <div class="page-content"></div>
                        <label class="prev" for="checkbox-page2"><i class="fas fa-chevron-left"/></label>
                    </div>
                </div>

                <div class="page" id="page4">
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

                <div class="page" id="page5">
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

                <div class="page" id="page6">
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