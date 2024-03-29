import React from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";



import { addToFavouriteAction, removeFromFavouriteAction } from "../redux/actions";

const MyLibrary = () => {
    const favourites = useSelector((state) => state.favourite.list)
    const dispatch = useDispatch();


    return (
        <>
            <div className="mainPage mt-3 ms-5">
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
                            <h2 className="mb-4">My Library</h2>
                            <div
                                id="rockSection"
                            >
                                <Row xs={1} md={2} lg={3} xl={4} className="g-2">
                                    {favourites.map((song) => (
                                        <Col key={song.id}>
                                            <img src={song.album.cover_medium} alt={song.album.title} />
                                            <div className="d-flex justify-content-around align-items-center me-3">
                                                <p className="custom-font-size-p mt-3" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                    {song.title.length ? song.title : `${song.title}...`}
                                                </p>
                                                <div className="me-5">
                                                    <AiFillHeart
                                                        className="text-white ms-2"
                                                        onClick={() => { dispatch(removeFromFavouriteAction(song.id)) }}
                                                    />
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default MyLibrary



