import React, { Component } from "react";
import Feature from "../components/feature";

class Main extends Component {
    render(){
        return (
            <div className="main">
                <section className="main-section p-5">
                    <div className="container text-center">
                    <div className="text">
                        <h1 className="text-white"> NEWS TELEGRAPH</h1>
                        <h5 className="text-muted pt-2">Crisp News Straight To Your Inbox</h5>
                        <a className="text-muted" target="_blank" rel="noopener noreferrer" href="https://github.com/digvijaysrathore">@github</a>
                        <a className="pl-2 text-muted" target="_blank" rel="noopener noreferrer" href="https://twitter.com/novadigvijay">@twitter</a>
                        <p><a target="_blank" rel="noopener noreferrer" className="text-light" href="https://t.me/NewsTelegraphBot">t.me/NewsTelegraphBot</a></p>
                    </div>
                    </div>
                </section>
                <section className="pt-5">
                    <div className="container">
                    <p>News services has evolved a lot, it's so boring to sit and read those lenghty articles.</p>
                    <p>News Telegraph is a telegram bot. It performs text analysis and send summarized news articles to your telegram inbox based on your interest. Go on to t.me/NewsTelegraphBot and type /start.</p>
                    <br />
                    </div>
                </section>
                <section className="proj-section pb-5">
                    <Feature title={"# Quickstart"} para={"Go to t.me/NewsTelegraphBot or search for NewsTelegraphBot on the telegram app/web and click on START. That's it. There are three genres, (1.) type 'technology' for getting the latest tech news, (2.) 'business' for some business updates and (3.) 'science' for some scietific dose."}/>
                    <Feature title={"# News Summary"} para={"The bot uses Natural Language Processing APIs to summarize wordy news articles and turn them into quick to-the-point notes."}/>
                    <Feature title={"# Paves The Way"} para={"Everytime, you text the suitable request, Aller (the bot) returns not just the summary of a news but also the link to let you continue reading and know the complete if a topic interests you. It provides you enough in the inbox for you to decide what needs your attention."}/>
                    <Feature title={"# Updates Every 20-30 Minutes"} para={"The news updates every 20-30 minutes if not less. It brings the latest updates from all the three genres. The news is mostly based on Indian subcontinent."}/>
                    <Feature title={"# Interest Based"} para={"Aller (the bot) has three genres to offer. Technology, business and science. You can request any of them by just a text and the bot will get back to you with the content from the particular category."}/>
                </section>
            </div>
        )
    }
};

export default Main;