import React from "react";
import { Row, Col } from "react-bootstrap";
import GetSong from "./GetSong";
import { useParams } from 'react-router-dom';

const SearchPage = () => {
    const { query } = useParams();

    return (
        <div className="mainPage">
            <Row>
                <Col className="col-12 mainLinks d-none d-md-flex margin-left-home mt-3">
                    <a href="www">TRENDING</a>
                    <a href="www">PODCAST</a>
                    <a href="www">MOODS AND GENRES</a>
                    <a href="www">NEW RELEASES</a>
                    <a href="www">DISCOVER</a>
                </Col>
            </Row>
            <Row>
                <Col >
                    <div id="rock" className="margin-left-home col-12">
                        <h2>Search Results</h2>
                        <div
                            id="rockSection"
                        >
                            <GetSong  genere={query} showC={12}/>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default SearchPage;