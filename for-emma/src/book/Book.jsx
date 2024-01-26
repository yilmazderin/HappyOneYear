import React from 'react';
import "./book.css";
import Preq1 from "../assets/Prequel1.png"
import Preq2 from "../assets/Prequel2.png"
import Preq3 from "../assets/Prequel3.png"
import Preq4 from "../assets/Prequel4.png"
import Preq5 from "../assets/Prequel5.png"
import Preq6 from "../assets/Prequel6.png"
import O1 from "../assets/O1.png"
import O2 from "../assets/O2.png"
import Tw1 from "../assets/Tw1.png"
import Tw2 from "../assets/Tw2.png"
import Tw3 from "../assets/Tw3.png"
import Tw4 from "../assets/Tw4.png"
import Th1 from "../assets/Th1.png"
import Th2 from "../assets/Th2.png"
import Fo1 from "../assets/Fo1.png"
import Fi1 from "../assets/Fi1.png"
import Fi2 from "../assets/Fi2.png"
import Fi3 from "../assets/Fi3.png"
import Fi4 from "../assets/Fi4.png"
import Fi5 from "../assets/Fi5.png"
import Si1 from "../assets/6i1.png"
import Si2 from "../assets/6i2.png"
import Si3 from "../assets/6i3.png"
import Si4 from "../assets/6i4.png"
import Si5 from "../assets/6i5.png"
import Si6 from "../assets/6i6.png"
import Si7 from "../assets/6i7.png"
import Si8 from "../assets/6i8.png"


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
                            <p>I dedicate this book to my to a beautiful girl. I am so happy and lucky to be able to call you my girlfriend for the past year. I am so excited for our future experiences and love to relive our past memories...</p>
                            <p>That is why I made you this book...</p>
                            <p>To remember all of our amazing memories we spent this last year together.</p>
                            <p>Happy 1 year anniversary my love</p>

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
                                <img src = {Preq2} alt="Preq2"/>
                                <p>Derin and Emma dressed as painters for Halloween</p>
                            </div>
                        </div>
                        <label class="prev" for="checkbox-page2"><i class="fas fa-chevron-left"/></label>
                    </div>
                </div>

                <div class="page" id="page3">
                    <div class="front-page">
                        <div class="page-content">
                            <div class = "imagesub2">
                                <img src = {Preq6} alt="Preq5"/>
                                <p>A little too hyper over football</p>
                            </div>
                            <div class = "imagesub3">
                                <img src = {Preq5} alt="Preq5"/>
                                <p>First of many Spageddy Eddy dates</p>
                            </div>
                            <h3 class="Prequeltit">First couple of dates!</h3>
                            <div class = "imagesub4">
                                <img src = {Preq4} alt="Preq5"/>
                                <p>Field trip to the pink lights</p>
                            </div>
                            <div class = "imagesub5">
                                <img src = {Preq3} alt="Preq3"/>
                                <p>Christmas dinner with the Yilmaz fam</p>
                            </div>
                            
                        </div>
                        <label class="next" for="checkbox-page3"><i class="fas fa-chevron-right"/></label>
                    </div>
                    <div class="back-page">
                        <div class="page-title">
                            <h1>Chapter 1</h1>
                        </div>
                        <div class="page-timeline">
                            <h3>January 29 - February 28</h3>
                        </div>
                        <div class="page-content">
                            <p>There was not much documentation for this month. However Derin did come back to surprise Emma on Valentine's Day! </p>
                            <div class = "imagesub6" id="O1">
                                <img src = {O2} alt="O1"/>
                                <p>A hyper-realistic drawing of what happened on Valentine's Day</p>
                            </div>
                            <div class = "imagesub7" id="O1">
                                <img src = {O1} alt="O1"/>
                                <p>The only photo that was recovered from that month.</p>
                            </div>
                        </div>
                        <label class="prev" for="checkbox-page3"><i class="fas fa-chevron-left"/></label>
                    </div>
                </div>

                <div class="page" id="page4">
                    <div class="front-page">
                        <div class="page-title">
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

                <div class="page" id="page5">
                    <div class="front-page">
                        <div class="page-title">
                            <h3>Chapter 3</h3>
                        </div>
                        <div class="page-content">
                            <p></p>
                        </div>
                        <label class="next" for="checkbox-page5"><i class="fas fa-chevron-right"/></label>
                    </div>
                    <div class="back-page">
                        <div class="page-title"></div>
                        <div class="page-content"></div>
                        <label class="prev" for="checkbox-page5"><i class="fas fa-chevron-left"/></label>
                    </div>
                </div>

                <div class="page" id="page6">
                    <div class="front-page">
                        <div class="page-title">
                            <h3>Chapter 2</h3>
                        </div>
                        <div class="page-content">
                            <p></p>
                        </div>
                        <label class="next" for="checkbox-page6"><i class="fas fa-chevron-right"/></label>
                    </div>
                    <div class="back-page">
                        <div class="page-title"></div>
                        <div class="page-content"></div>
                        <label class="prev" for="checkbox-page6"><i class="fas fa-chevron-left"/></label>
                    </div>
                </div>

                <div class="page" id="page7">
                    <div class="front-page">
                        <div class="page-title">
                            <h3>Chapter 2</h3>
                        </div>
                        <div class="page-content">
                            <p></p>
                        </div>
                        <label class="next" for="checkbox-page7"><i class="fas fa-chevron-right"/></label>
                    </div>
                    <div class="back-page">
                        <div class="page-title"></div>
                        <div class="page-content"></div>
                        <label class="prev" for="checkbox-page7"><i class="fas fa-chevron-left"/></label>
                    </div>
                </div>

                <div class="page" id="page8">
                    <div class="front-page">
                        <div class="page-title">
                            <h3>Chapter 2</h3>
                        </div>
                        <div class="page-content">
                            <p></p>
                        </div>
                        <label class="next" for="checkbox-page8"><i class="fas fa-chevron-right"/></label>
                    </div>
                    <div class="back-page">
                        <div class="page-title"></div>
                        <div class="page-content"></div>
                        <label class="prev" for="checkbox-page8"><i class="fas fa-chevron-left"/></label>
                    </div>
                </div>

                <div class="page" id="page9">
                    <div class="front-page">
                        <div class="page-title">
                            <h3>Chapter 2</h3>
                        </div>
                        <div class="page-content">
                            <p></p>
                        </div>
                        <label class="next" for="checkbox-page9"><i class="fas fa-chevron-right"/></label>
                    </div>
                    <div class="back-page">
                        <div class="page-title"></div>
                        <div class="page-content"></div>
                        <label class="prev" for="checkbox-page9"><i class="fas fa-chevron-left"/></label>
                    </div>
                </div>

                <div class="page" id="page10">
                    <div class="front-page">
                        <div class="page-title">
                            <h3>Chapter 2</h3>
                        </div>
                        <div class="page-content">
                            <p></p>
                        </div>
                        <label class="next" for="checkbox-page10"><i class="fas fa-chevron-right"/></label>
                    </div>
                    <div class="back-page">
                        <div class="page-title"></div>
                        <div class="page-content"></div>
                        <label class="prev" for="checkbox-page10"><i class="fas fa-chevron-left"/></label>
                    </div>
                </div>

                <div class="page" id="page11">
                    <div class="front-page">
                        <div class="page-title">
                            <h3>Chapter 2</h3>
                        </div>
                        <div class="page-content">
                            <p>Dada</p>
                        </div>
                        <label class="next" for="checkbox-page11"><i class="fas fa-chevron-right"/></label>
                    </div>
                    <div class="back-page">
                        <div class="page-title"></div>
                        <div class="page-content"></div>
                        <label class="prev" for="checkbox-page11"><i class="fas fa-chevron-left"/></label>
                    </div>
                </div>

                <div class="page" id="page12">
                    <div class="front-page">
                        <div class="page-title">
                            <h3>Chapter 2</h3>
                        </div>
                        <div class="page-content">
                            <p>Dada</p>
                        </div>
                        <label class="next" for="checkbox-page12"><i class="fas fa-chevron-right"/></label>
                    </div>
                    <div class="back-page">
                        <div class="page-title"></div>
                        <div class="page-content"></div>
                        <label class="prev" for="checkbox-page12"><i class="fas fa-chevron-left"/></label>
                    </div>
                </div>

                <div class="page" id="page13">
                    <div class="front-page">
                        <div class="page-title">
                            <h3>Chapter 2</h3>
                        </div>
                        <div class="page-content">
                            <p>Dada</p>
                        </div>
                        <label class="next" for="checkbox-page13"><i class="fas fa-chevron-right"/></label>
                    </div>
                    <div class="back-page">
                        <div class="page-title"></div>
                        <div class="page-content"></div>
                        <label class="prev" for="checkbox-page13"><i class="fas fa-chevron-left"/></label>
                    </div>
                </div>

                <div class="page" id="page14">
                    <div class="front-page">
                        <div class="page-title">
                            <h3>Chapter 2</h3>
                        </div>
                        <div class="page-content">
                            <p>Dada</p>
                        </div>
                        <label class="next" for="checkbox-page14"><i class="fas fa-chevron-right"/></label>
                    </div>
                    <div class="back-page">
                        <div class="page-title"></div>
                        <div class="page-content"></div>
                        <label class="prev" for="checkbox-page14"><i class="fas fa-chevron-left"/></label>
                    </div>
                </div>

                <div class="page" id="page15">
                    <div class="front-page">
                        <div class="page-title">
                            <h3>Chapter 2</h3>
                        </div>
                        <div class="page-content">
                            <p></p>
                        </div>
                        <label class="next" for="checkbox-page15"><i class="fas fa-chevron-right"/></label>
                    </div>
                    <div class="back-page">
                        <div class="page-title"></div>
                        <div class="page-content"></div>
                        <label class="prev" for="checkbox-page15"><i class="fas fa-chevron-left"/></label>
                    </div>
                </div>

                <div class="back-cover"></div>
            </div>
        </div>
    );
}

export default Book;