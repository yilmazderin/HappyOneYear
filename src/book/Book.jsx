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
import Se1 from "../assets/Se1.png"
import Se2 from "../assets/Se2.png"
import Se3 from "../assets/Se3.png"
import Se4 from "../assets/Se4.png"
import Se5 from "../assets/Se5.png"
import Se6 from "../assets/Se6.png"
import Se7 from "../assets/Se7.png"
import Se8 from "../assets/Se8.png"
import Se9 from "../assets/Se9.png"
import Se10 from "../assets/Se10.png"
import Se11 from "../assets/Se11.png"
import E1 from "../assets/E1.png"
import E2 from "../assets/E2.png"
import E3 from "../assets/E3.png"
import E4 from "../assets/E4.png"
import E5 from "../assets/E5.png"
import E6 from "../assets/E6.png"
import E7 from "../assets/E7.png"
import E8 from "../assets/E8.png"
import N1 from "../assets/N1.png"
import N2 from "../assets/N2.png"
import N3 from "../assets/N3.png"
import N4 from "../assets/N4.png"
import N5 from "../assets/N5.png"
import N6 from "../assets/N6.png"
import T1 from "../assets/T1.png"
import T2 from "../assets/T2.png"
import El1 from "../assets/El1.png"
import El2 from "../assets/El2.png"
import El3 from "../assets/El3.png"
import El4 from "../assets/El4.png"
import El5 from "../assets/El5.png"
import El6 from "../assets/El6.png"
import El7 from "../assets/El7.png"
import El8 from "../assets/El8.png"
import El9 from "../assets/El9.png"
import Twe1 from "../assets/Twe1.png"
import Twe2 from "../assets/Twe2.png"
import Twe3 from "../assets/Twe3.png"
import Twe4 from "../assets/Twe4.png"
import Twe5 from "../assets/Twe5.png"



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
            <input type="checkbox" id="checkbox-page14"/>
            <input type="checkbox" id="checkbox-page15"/>
            <input type="checkbox" id="checkbox-page16"/>
            <input type="checkbox" id="checkbox-page17"/>
            <input type="checkbox" id="checkbox-page18"/>

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
                            <p>I dedicate this book to my beautiful girl. I am so happy and lucky to be able to call you my girlfriend for the past year. I am so excited for our future experiences and love to relive our past memories...</p>
                            <p>That is why I made you this book...</p>
                            <p>To remember all of our amazing memories we spent this last year together.</p>
                            <p>Happy 1 year anniversary my love</p>

                        </div>
                        <label class="next" for="checkbox-page1"><i class="fas fa-chevron-right"/></label>
                    </div>
                    <div class="back-page">
                        <div class="page-title">
                        <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
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
                        <br/>
                            <br/>

                            <p>Things really picked up when Emma decided to come to London and celebrate her favourite holiday with the guy she re-met last week. She made the smart decision of trusting him and having a sleepover.</p>
                            <div class = "imagesub1">
                                <img src = {Preq2} alt="Preq2"/>
                                <p>Couple of cute painters!</p>
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
                                <p>&nbsp;A little too hyper over football</p>
                            </div>
                            <div class = "imagesub3">
                                <img src = {Preq5} alt="Preq5"/>
                                <p>First of many Spageddy Eddy dates</p>
                            </div>
                            <h3 class="Prequeltit">First couple of dates!</h3>
                            <div class = "imagesub4">
                                <img src = {Preq4} alt="Preq5"/>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Field trip to the pink lights</p>
                            </div>
                            <div class = "imagesub5">
                                <img src = {Preq3} alt="Preq3"/>
                                <p>Yilmaz Christmas dinner!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
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
                        </div>
                        <label class="prev" for="checkbox-page3"><i class="fas fa-chevron-left"/></label>
                    </div>
                </div>

                <div class="page" id="page4">
                    <div class="front-page">
                        <div class="page-content">
                            <div class = "imagesub7" id="O1">
                                <img src = {O1} alt="O1"/>
                                <p>The only photo that was recovered from that month.</p>
                            </div>
                        </div>
                        <label class="next" for="checkbox-page4"><i class="fas fa-chevron-right"/></label>
                    </div>
                    <div class="back-page">
                        <div class="page-title">
                            <h1>Chapter 2</h1>
                        </div>
                        <div class="page-timeline">
                            <h3>March 1 - March 28</h3>
                        </div>
                        <div class="page-content">
                            <p>March had a lot of fun things for the two of them. They celebrated St.Patty's Day and Derin's birthday!</p>
                        </div>
                        <div class = "imagesub8" id="O1">
                                <img src = {Tw4} alt="O1"/>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A lovely dinner at K-Grill</p>
                        </div>
                        <div class = "imagesub9" id="O1">
                                <img src = {Tw3} alt="O1"/>
                                <p>Eating yummy St.Patty's Day cake</p>
                        </div>
                        <label class="prev" for="checkbox-page4"><i class="fas fa-chevron-left"/></label>
                    </div>
                </div>

                <div class="page" id="page5">
                    <div class="front-page">
                        <div class="page-content">
                        <div class = "imagesub10" id="O1">
                            <img src = {Tw1} alt="O1"/>
                            <p>Derin's birthday! (March 27 not January 27...)</p>
                        </div>
                        <div class = "imagesub10" id="O1">
                            <img src = {Tw2} alt="O1"/>
                        </div>
                        </div>
                        <label class="next" for="checkbox-page5"><i class="fas fa-chevron-right"/></label>
                    </div>
                    <div class="back-page">
                        <div class="page-title">
                            <h1>Chapter 3</h1>
                        </div>
                        <div class="page-timeline">
                            <h3>March 29 - April 28</h3>
                        </div>
                        <div class="page-content">
                            <p>April was a relaxing month. Not many exciting events just spending quality time with each other, eating QUALITY food.</p>
                            <div class = "imagesub1" id="O1">
                                <img src = {Th1} alt="O1"/>
                                <p>1 Mazza-Mazza please</p>
                            </div>
                        </div>
                        <label class="prev" for="checkbox-page5"><i class="fas fa-chevron-left"/></label>
                    </div>
                </div>

                <div class="page" id="page6">
                    <div class="front-page">
                        <div class="page-content">
                            <div class = "imagesub" id="O1">
                                <img src = {Th2} alt="O1"/>
                                <p>Can't forget Village Kitchen. By the way, just look how beautiful she is.</p>
                            </div>
                        </div>
                        <label class="next" for="checkbox-page6"><i class="fas fa-chevron-right"/></label>
                    </div>
                    <div class="back-page">
                    <div class="page-title">
                            <h1>Chapter 4</h1>
                        </div>
                        <div class="page-timeline">
                            <h3>April 29 - May 28</h3>
                        </div>
                        <div class="page-content">
                            <p>Again, this was a very chill month. Not much was documented. However... Derin did start to notice some weird patterns in Emma's actions. He realized, she started to dress and act a lot like someone he knew...</p>
                            <br/>
                            <p>He just couldn't quite tell who she looked like.</p>
                            <br/>
                            <p>Whatever was happening, Derin knew it wasn't normal, so he proceeded with caution.</p>
                        </div>
                        <label class="prev" for="checkbox-page6"><i class="fas fa-chevron-left"/></label>
                    </div>
                </div>

                <div class="page" id="page7">
                    <div class="front-page">
                        <div class="page-content">
                        <div class = "imagesub" id="O1">
                                <img src = {Fo1} alt="O1"/>
                                <p>Very weird</p>
                            </div>
                        </div>
                        <label class="next" for="checkbox-page7"><i class="fas fa-chevron-right"/></label>
                    </div>
                    <div class="back-page">
                    <div class="page-title">
                            <h1>Chapter 5</h1>
                        </div>
                        <div class="page-timeline">
                            <h3>May 29 - June 28</h3>
                        </div>
                        <div class="page-content">
                            <p>Things started to pickup this month. For Derin's birthday, &nbsp;&nbsp;&nbsp;Emma so generously purchases VIP tickets for his favourite band, The Backseat Lovers!</p>
                            <div class = "imagesub7" id="O1">
                                <img src = {Fi4} alt="O1"/>
                                <p>The Backseat Lovers in action</p>
                            </div>
                        </div>
                        <label class="prev" for="checkbox-page7"><i class="fas fa-chevron-left"/></label>
                    </div>
                </div>

                <div class="page" id="page8">
                    <div class="front-page">
                        <div class="page-content">
                            <div class = "imagesub15" id="O1">
                                <img src = {Fi5} alt="O1"/>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;So so gorgeous</p>
                            </div>
                            <div class = "imagesub16" id="O1">
                                <img src = {Fi3} alt="O1"/>
                                <p>Yeah... they're VIPs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            </div>
                            <div class = "imagesub14" id="O1">
                                <img src = {Fi1} alt="O1"/>
                                <p>Walked forever just to make the Uber cheaper</p>
                            </div>
                        </div>
                        <label class="next" for="checkbox-page8"><i class="fas fa-chevron-right"/></label>
                    </div>
                    <div class="back-page">
                    <div class="page-title">
                            <h1>Chapter 6</h1>
                        </div>
                        <div class="page-timeline">
                            <h3>June 29 - July 28</h3>
                        </div>
                        <div class="page-content">
                            <p>Derin and Emma had a lot to do in July. They went to Big Time Entertainment, bowling, the fireworks show for July 4th and went to see BARBIE!</p>
                            <div class = "imagesub8" id="O1">
                                <img src = {Si6} alt="O1"/>
                                <p>Derin was SO excited to watch Barbie</p>
                            </div>
                            <div class = "imagesub9" id="O1">
                                <img src = {Si8} alt="O1"/>
                                <p>Adorable&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            </div>
                        </div>
                        <label class="prev" for="checkbox-page8"><i class="fas fa-chevron-left"/></label>
                    </div>
                </div>

                <div class="page" id="page9">
                    <div class="front-page">
                        <div class="page-content">
                            <div class = "imagesub2" id="O1">
                                <img src = {Si3} alt="O1"/>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Flexing on haters</p>
                            </div>
                            <div class = "imagesub3" id="O1">
                                <img src = {Si2} alt="O1"/>
                                <p>Also flexing on the haters... copier</p>
                            </div>
                            <div class = "imagesub4" id="O1">
                                <img src = {Si1} alt="O1"/>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Laser tag pros</p>
                            </div>
                            <div class = "imagesub5" id="O1">
                                <img src = {Si7} alt="O1"/>
                                <p>Pretty fireworks!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            </div>
                        </div>
                        <label class="next" for="checkbox-page9"><i class="fas fa-chevron-right"/></label>
                    </div>
                    <div class="back-page">
                        <div class="page-title">
                            <h1>Chapter 7</h1>
                        </div>
                        <div class="page-timeline">
                            <h3>July 29 - August 28</h3>
                        </div>
                        <div class="page-content">
                            <p>ON JULY 29, THEY REACHED 6 MONTHS WOOOOOOO! (as Derin would say "6 months too long am I right")</p>
                        </div>
                        <div class = "imagesub1" id="O1">
                                <img src = {Se3} alt="O1"/>
                                <p>A dinner with a view! (get it? She's the view)</p>
                            </div>
                        <label class="prev" for="checkbox-page9"><i class="fas fa-chevron-left"/></label>
                    </div>
                </div>

                <div class="page" id="page10">
                    <div class="front-page">
                    
                        <div class="page-content">
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <p>Derin and Emma also went to a cottage and created so many memorable experiences with all of Derin's room mates...</p>
                        </div>
                        <label class="next" for="checkbox-page10"><i class="fas fa-chevron-right"/></label>
                    </div>
                    <div class="back-page">
                        <div class="page-content">
                            <br/>
                            <p>A long and exhuasting walk through the dunes!</p>
                            <div class = "imagesub1" id="O1">
                                <img src = {Se7} alt="O1"/>
                                <p>Mid hike pic!</p>
                            </div>
                            <div class = "imagesub1" id="O1">
                                <img src = {Se8} alt="O1"/>
                                <p>Can't dream of a better view than this</p>
                            </div>
                        </div>
                        <label class="prev" for="checkbox-page10"><i class="fas fa-chevron-left"/></label>
                    </div>
                </div>

                <div class="page" id="page11">
                    <div class="front-page">
                        <div class="page-content">
                            <div class = "imagesub11" id="O1">
                                <img src = {Se1} alt="O1"/>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cozy at the campfire</p>
                            </div>
                            <div class = "imagesub12" id="O1">
                                <img src = {Se2} alt="O1"/>
                                <p>Derin tending the fire&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            </div>
                            <div class = "imagesub13" id="O1">
                                <img src = {Se5} alt="O1" />
                                <p>Heart eyes.</p>
                            </div>
                        </div>
                        <label class="next" for="checkbox-page11"><i class="fas fa-chevron-right"/></label>
                    </div>
                    <div class="back-page">
                    <div class="page-title">
                            <h1>Chapter 8</h1>
                        </div>
                        <div class="page-timeline">
                            <h3>August 29 - September 28</h3>
                        </div>
                        <div class="page-content">
                            <p>In the month of September, Derin and Emma celebrated FOCO at Western and had a blast! They also had another trip to &nbsp;&nbsp;&nbsp;their favourite restaurant.</p>
                        </div>
                        <div class = "imagesub8" id="O1">
                                <img src = {E2} alt="O1"/>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Roll Stangs!</p>
                            </div>
                            <div class = "imagesub9" id="O1">
                                <img src = {E1} alt="O1"/>
                                <p>What a creative BORG name!&nbsp;&nbsp;</p>
                            </div>
                        <label class="prev" for="checkbox-page11"><i class="fas fa-chevron-left"/></label>
                    </div>
                </div>

                <div class="page" id="page12">
                    <div class="front-page">
                        <div class="page-content">
                        <div class = "imagesub15" id="O1">
                                <img src = {E5} alt="O1"/>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Emma's first keg stand!</p>
                            </div>
                            <div class = "imagesub16" id="O1">
                                <img src = {E6} alt="O1"/>
                                <p>0.5 pics are a necessity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            </div>
                            <div class = "imagesub17" id="O1">
                                <img src = {E3} alt="O1"/>
                                <p>Emma squeezing Derin just a bit to tight</p>
                            </div>
                            
                        </div>
                        <label class="next" for="checkbox-page12"><i class="fas fa-chevron-right"/></label>
                    </div>
                    <div class="back-page">
                        <div class="page-content">
                        <div class = "imagesub15" id="O1">
                                <img src = {E8} alt="O1"/>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Another Spageddy Eddy's run</p>
                            </div>
                            <div class = "imagesub17" id="O1">
                                <img src = {E7} alt="O1"/>
                                <p>Immaculate style</p>
                            </div>
                            <div class = "imagesub16" id="O1">
                                <img src = {E4} alt="O1"/>
                                <p>Action shot (don't kill me)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            </div>
                        </div>
                        <label class="prev" for="checkbox-page12"><i class="fas fa-chevron-left"/></label>
                    </div>
                </div>

                <div class="page" id="page13">
                    <div class="front-page">
                    <div class="page-title">
                            <h1>Chapter 9</h1>
                        </div>
                        <div class="page-timeline">
                            <h3>September 29 - October 28</h3>
                        </div>
                        <div class="page-content">
                            <p>Daniel Ceasar was coming into town, and Derin and Emma knew they couldn't miss that! They also went on a hilarious cottage trip with tons of hysterical memories.</p>
                            <div class = "imagesub1" id="O1">
                                <img src = {N1} alt="O1"/>
                                <p>Wow! Daniel Ceasar</p>
                            </div>
                        </div>
                        
                        <label class="next" for="checkbox-page13"><i class="fas fa-chevron-right"/></label>
                    </div>
                    <div class="back-page">
                        <div class="page-content">
                        <div class = "imagesub11" id="O1">
                                <img src = {N2} alt="O1"/>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Who is that baldie?</p>
                            </div>
                            <div class = "imagesub16" id="O1">
                                <img src = {N4} alt="O1"/>
                                <p>Double date!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            </div>
                            <div class = "imagesub14" id="O1">
                                <img src = {N6} alt="O1"/>
                                <p>Patiently waiting for Always</p>
                            </div>
                        </div>
                        <label class="prev" for="checkbox-page13"><i class="fas fa-chevron-left"/></label>
                    </div>
                </div>

                <div class="page" id="page14">
                    <div class="front-page">
                        <div class="page-content">
                            <p>The only two pics captured from the infamous cottage trip.</p>
                            <div class = "imagesub10" id="O1">
                                <img src = {N5} alt="O1"/>
                                <p>*shrug* bed. *shrug*</p>
                            </div>
                            <div class = "imagesub1" id="O1">
                                <img src = {N3} alt="O1"/>
                                <p>On the ferry!</p>
                            </div>
                        </div>
                        <label class="next" for="checkbox-page14"><i class="fas fa-chevron-right"/></label>
                    </div>
                    <div class="back-page">
                    <div class="page-title">
                            <h1>Chapter 10</h1>
                        </div>
                        <div class="page-timeline">
                            <h3>October 29 - November 28</h3>
                        </div>
                        <div class="page-content">
                            <p>October, the month of Halloween! This is Emma's favourite holiday ever! Derin and Emma were &nbsp;lucky enough to celebrate Halloween in London and Windsor.</p>
                            <div class = "imagesub1" id="O1">
                                <img src = {T1} alt="O1"/>
                                <p>Wolf of Sarnia Street</p>
                            </div>
                            </div>
                        <label class="prev" for="checkbox-page14"><i class="fas fa-chevron-left"/></label>
                    </div>
                </div>

                <div class="page" id="page15">
                    <div class="front-page">
                        <div class="page-content">
                        <div class = "imagesub" id="O1">
                            <br/>
                            <br/>
                                <img src = {T2} alt="O1"/>
                                <p>I wonder who picked out these costumes.</p>
                            </div>
                        </div>
                        <label class="next" for="checkbox-page15"><i class="fas fa-chevron-right"/></label>
                    </div>
                    <div class="back-page">
                    <div class="page-title">
                            <h1>Chapter 11</h1>
                        </div>
                        <div class="page-timeline">
                            <h3>November 29 - December 28</h3>
                        </div>
                        <div class="page-content">
                            <p>December was jam packed with so many fun events for the couple. They went shopping in the states, celebrated Sophie's birthday, went to see Anyone But You, built gingerbread houses and most importantly... celebrated Emma's birthday!</p>
                            <div class = "imagesub1" id="O1">
                                <img src = {El3} alt="O1"/>
                                <p>Shopping! (This picture would be a great screensaver)</p>
                            </div>
                        </div>
                        <label class="prev" for="checkbox-page15"><i class="fas fa-chevron-left"/></label>
                    </div>
                </div>

                <div class="page" id="page16">
                    <div class="front-page">
                        <div class="page-content">
                            <div class = "imagesub15" id="O1">
                                <img src = {El8} alt="O1"/>
                                <p>&nbsp;&nbsp;&nbsp;Wineology top floor kinda slapped</p>
                            </div>
                            <div class = "imagesub16" id="O1">
                                <img src = {El6} alt="O1"/>
                                <p>Derin's did all the work&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            </div>
                            <div class = "imagesub18" id="O1">
                                <img src = {El7} alt="O1"/>
                                <p>Quick Dollarama run pre Anyone But You</p>
                            </div>
                        </div>
                        <label class="next" for="checkbox-page16"><i class="fas fa-chevron-right"/></label>
                    </div>
                    <div class="back-page">
                        <div class="page-content">
                            <p>It is so easy to celebrated the most gorgeous girl in this world.&nbsp; Not many photos were taken this night, but so many memories were made. They started the night at Dimi's with their friends, where Emma took a birthday shot and broke a plate. They &nbsp;&nbsp;&nbsp;then walked to Delilah's, where they might have had a little &nbsp;&nbsp;too much to drink. After that, they found themselves at McCabes, where they didn't really remember how they got &nbsp;&nbsp;there. Overall, a very fun way to celebrate such a special &nbsp;&nbsp;&nbsp;girl.</p>
                        </div>
                        <div class = "imagesub8" id="O1">
                                <img src = {El4} alt="O1"/>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lookin' very snazzy!</p>
                            </div>
                            <div class = "imagesub9" id="O1">
                                <img src = {El5} alt="O1"/>
                                <p>Oh just kiss me&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            </div>
                        <label class="prev" for="checkbox-page16"><i class="fas fa-chevron-left"/></label>
                    </div>
                </div>

                <div class="page" id="page17">
                    <div class="front-page">
                        <div class="page-content">
                        <div class = "imagesub1" id="O1">
                                <img src = {El1} alt="O1"/>
                                <p>Derin's favourite pic of Emma that night</p>
                            </div>
                        <div class = "imagesub1" id="O1">
                                <img src = {El2} alt="O1"/>
                                <p>Oh just kiss me (again)
                                </p>
                            </div>
                        </div>
                        <label class="next" for="checkbox-page17"><i class="fas fa-chevron-right"/></label>
                    </div>
                    <div class="back-page">
                    <div class="page-title">
                            <h1>Chapter 12</h1>
                        </div>
                        <div class="page-timeline">
                            <h3>December 29 - January 28</h3>
                        </div>
                        <div class="page-content"></div>
                        <label class="prev" for="checkbox-page17"><i class="fas fa-chevron-left"/></label>
                    </div>
                </div><div class="page" id="page17">
                    <div class="front-page">
                        <div class="page-content">
                        <div class = "imagesub1" id="O1">
                                <img src = {El1} alt="O1"/>
                                <p>Derin's favourite pic of Emma that night</p>
                            </div>
                        <div class = "imagesub1" id="O1">
                                <img src = {El2} alt="O1"/>
                                <p>Oh just kiss me (again)
                                </p>
                            </div>
                        </div>
                        <label class="next" for="checkbox-page17"><i class="fas fa-chevron-right"/></label>
                    </div>
                    <div class="back-page">
                    <div class="page-title">
                            <h1>Chapter 12</h1>
                        </div>
                        <div class="page-timeline">
                            <h3>December 29 - January 28</h3>
                        </div>
                        <div class="page-content">
                            <p>For January, Derin and Emma went to their first Lion's game! They also went to Spageddy Eddy's for the millionth time... but man... it keeps getting better.</p>
                        </div>
                        <div class = "imagesub8" id="O1">
                                <img src = {Twe2} alt="O1"/>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Go Laporta go!</p>
                            </div>
                            <div class = "imagesub9" id="O1">
                                <img src = {Twe1} alt="O1"/>
                                <p>Random tweaker photobomb&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            </div>
                        <label class="prev" for="checkbox-page17"><i class="fas fa-chevron-left"/></label>
                    </div>
                </div>

                <div class="page" id="page18">
                    <div class="front-page">
                        <div class="page-content">
                        <div class = "imagesub1" id="O1">
                                <img src = {Twe3} alt="O1"/>
                                <p>Wow.</p>
                            </div>
                            <div class = "imagesub4" id="O1">
                                <img src = {Twe4} alt="O1"/>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Happiest place in the world</p>
                            </div>
                            <div class = "imagesub5" id="O1">
                                <img src = {Twe5} alt="O1"/>
                                <p>Gates to heaven&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            </div>
                        </div>
                        <label class="next" for="checkbox-page18"><i class="fas fa-chevron-right"/></label>
                    </div>
                    <div class="back-page">
                    <div class="page-title">
                            <h1>Final Remarks</h1>
                        </div>
                        <div class="page-content">
                            <p>Emma.. I love you and all of the memories we have created. </p>
                            <p>I love to look back to the pictures we have and relive each moment I experienced with you.</p>
                            <p>Thank you for being the absolute perfect girlfriend I could &nbsp;&nbsp;have ever asked for.</p>
                            <p>I am the luckiest man ever to be able to call a girl like you his girlfriend.</p>
                            <p>I can not wait to create many more chapters with you my love (let's just take more photos while doing so).</p>
                            <p>Happy 1 year anniversary.</p>
                        </div>
                        <label class="prev" for="checkbox-page18"><i class="fas fa-chevron-left"/></label>
                    </div>
                </div>

                <div class="back-cover"></div>
            </div>
        </div>
    );
}

export default Book;