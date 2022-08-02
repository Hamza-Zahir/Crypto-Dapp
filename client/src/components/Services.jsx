import React from 'react';
import { BsShieldFillCheck } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { RiHeart2Fill } from 'react-icons/ri';
const Services = () => {
    return (
        <div className="p-4 mt-5" id="Services">
            <div className=" col-xl-11 mx-auto row align-items-center justify-content-center  bg-ligt">
                <h1 className="col-12 col-md-5 p-3 text-light">
                    {' '}
                    Services that we continue to improve{' '}
                </h1>
                <div className="col-12 col-md-7">
                    <div className="bg-dark text-light d-flex align-items-center px-3 py-2 m-2 border border-secondary bor-rud ">
                        <div className="me-3">
                            <span
                                className=" bg-primary rounded-circle d-flex align-items-center justify-content-center"
                                style={{
                                    display: 'inline-block',
                                    width: '40px',
                                    height: '40px',
                                }}
                            >
                                <BsShieldFillCheck fontSize={22} color={''} />
                            </span>
                        </div>
                        <div>
                            <h6>Security Guaranteed</h6>
                            <p className="m-0">
                                Secrity is guaranted. We always maintain privacy and mainting
                                the quality of our products.
                            </p>
                        </div>
                    </div>
                    <div className="bg-dark text-light d-flex align-items-center px-3 py-2 m-2 border border-secondary bor-rud">
                        <div className="me-3">
                            <span
                                className="rounded-circle d-flex justify-content-center align-items-center "
                                style={{
                                    display: 'inline-block',
                                    width: '40px',
                                    height: '40px',
                                    background: 'blueviolet',
                                }}
                            >
                                <BiSearchAlt fontSize={27} />{' '}
                            </span>
                        </div>

                        <div className="">
                            <h6>Best exchange retes</h6>
                            <p className="m-0">
                                Secrity is guaranted. We always maintain privacy and mainting
                                the quality of our products.
                            </p>
                        </div>
                    </div>
                    <div className="bg-dark text-light d-flex align-items-center px-3 py-2 m-2 border border-secondary bor-rud">
                        <div className="me-3">
                            <span
                                className=" bg-danger rounded-circle d-flex justify-content-center align-items-center "
                                style={{
                                    display: 'inline-block',
                                    width: '40px',
                                    height: '40px',
                                }}
                            >
                                <RiHeart2Fill fontSize={27} />{' '}
                            </span>
                        </div>

                        <div className="">
                            <h6>Fastes transactions</h6>
                            <p className="m-0">
                                Secrity is guaranted. We always maintain privacy and mainting
                                the quality of our products.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
