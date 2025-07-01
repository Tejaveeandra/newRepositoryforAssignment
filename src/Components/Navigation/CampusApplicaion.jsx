import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
    TextField,
    Button,
    Typography,
    Select,
    MenuItem,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CampusTable from '../Navigation/CampusTable'

const CampusApplication = () => {
    const [selectedRowData, setSelectedRowData] = useState(null);

    const initialValues = {
        academicYear: '2024-2025',
        stateName: 'Telangana',
        cityName: '',
        zoneName: '',
        issuedTo: '',
        applicationFrom: '',
        applicationTo: '',
        range: '',
        issueDate: '',
        mobileNo: '',
    };

    const handleUpdateFromTable = (data) => {
        setSelectedRowData(data);
    };

    return (
        <div
            className="main-container"
            style={{
                padding: '10px',
                width: '100%',
                margin: '0 auto',
                boxSizing: 'border-box',
            }}
        >
            <div
                className="content-wrapper"
                style={{
                    display: 'flex',
                    gap: '10px',
                    width: '100%',
                    flexWrap: 'nowrap',
                }}
            >
                <div
                    className="left-container LeftContainer"
                    style={{
                        flex: 1,
                        boxSizing: 'border-box',
                        width: '75%',
                    }}
                >
                    <div
                        className="header-section"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '10px',
                        }}
                    >
                        <div className="logo-container" style={{ marginRight: '10px' }}>
                            <svg
                                width="56"
                                height="55"
                                viewBox="0 0 56 55"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g filter="url(#filter0_d_2394_622)">
                                    <rect x="3" y="2.5" width="50" height="50" rx="8.33333" fill="#3425FF" />
                                    <rect x="3" y="2.5" width="50" height="50" rx="8.33333" fill="url(#paint0_linear_2394_622)" />
                                    <path
                                        d="M26.5 19.6044H35.5M20.5 19.6044H22M20.5 27.1044H22M20.5 34.6044H22M26.5 27.1044H35.5M26.5 34.6044H35.5M13.75 27.1044C13.75 20.3874 13.75 17.0274 15.8365 14.9409C17.923 12.8544 21.2815 12.8544 28 12.8544C34.717 12.8544 38.077 12.8544 40.1635 14.9409C42.25 17.0274 42.25 20.3859 42.25 27.1044C42.25 33.8214 42.25 37.1814 40.1635 39.2679C38.077 41.3544 34.7185 41.3544 28 41.3544C21.283 41.3544 17.923 41.3544 15.8365 39.2679C13.75 37.1814 13.75 33.8229 13.75 27.1044Z"
                                        stroke="white"
                                        strokeWidth="2.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                                <defs>
                                    <filter
                                        id="filter0_d_2394_622"
                                        x="0.560976"
                                        y="0.0609758"
                                        width="54.878"
                                        height="54.878"
                                        filterUnits="userSpaceOnUse"
                                        colorInterpolationFilters="sRGB"
                                    >
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix
                                            in="SourceAlpha"
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            result="hardAlpha"
                                        />
                                        <feOffset />
                                        <feGaussianBlur stdDeviation="1.21951" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in2="BackgroundImageFix"
                                            result="effect1_dropShadow_2394_622"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in="SourceGraphic"
                                            in2="effect1_dropShadow_2394_622"
                                            result="shape"
                                        />
                                    </filter>
                                    <linearGradient
                                        id="paint0_linear_2394_622"
                                        x1="47.5"
                                        y1="2"
                                        x2="28"
                                        y2="27"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#636363" stopOpacity="0" />
                                        <stop offset="1" stopColor="#3026B7" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div
                            className="title-button-container"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: '100%',
                            }}
                        >
                            <div className="title-container">
                                <Typography
                                    variant="h6"
                                    style={{ fontWeight: 700, fontSize: '22px', color: '#393939' }}
                                >
                                    Distribute Applications to Campus
                                </Typography>
                                <Typography
                                    variant="body2"
                                    style={{ fontWeight: 400, fontSize: '12px', color: '#575757', width: '70%' }}
                                >
                                    Get All Student Details Regarding Fee Payment, Transport, Pocket Money, Other Fee Heads
                                </Typography>
                            </div>
                            <div
                                className="button-group"
                                style={{
                                    display: 'flex',
                                    gap: '10px',
                                    backgroundColor: '#F0F0F0',
                                    borderRadius: '20px',
                                    padding: '5px 10px',
                                }}
                            >
                                <Button

                                    style={{
                                        backgroundColor: 'transparent',
                                        color: '#616161',
                                        borderRadius: '20px',
                                        textTransform: 'none',
                                        padding: '5px 15px',
                                    }}
                                >
                                    Zone
                                </Button>
                                <Button
                                    style={{
                                        borderRadius: '20px',
                                        color: '#FFFFFF',
                                        textTransform: 'none',
                                        padding: '5px 15px',
                                        color: '#616161',
                                        backgroundColor: 'transparent',
                                    }}
                                >
                                    DGM
                                </Button>
                                <Button
                                    style={{
                                        borderRadius: '20px',
                                        color: '#FFFFFF',

                                        textTransform: 'none',
                                        padding: '5px 15px',

                                        backgroundColor: '#3425FF'
                                    }}
                                >
                                    Campus
                                </Button>
                            </div>
                        </div>
                    </div>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                        enableReinitialize={true} // Allows form to reinitialize with new values
                    >
                        {({ values, setFieldValue }) => (
                            <Form>
                                <div className="card p-4" style={{ width: '100%' }}>
                                    <div
                                        className="form-container"
                                        style={{ display: 'flex', gap: '70px', flexDirection: 'row', width: '100%' }}
                                    >
                                        <div
                                            className="left-column"
                                            style={{ flex: 1, display: 'grid', gap: '7px' }}
                                        >
                                            <div>
                                                <Typography
                                                    variant="body2"
                                                    style={{ fontWeight: 400, fontSize: '12px', color: '#344054' }}
                                                >
                                                    Academic Year
                                                </Typography>
                                                <Field
                                                    as={TextField}
                                                    fullWidth
                                                    name="academicYear"
                                                    value={values.academicYear}
                                                    disabled
                                                    variant="outlined"
                                                    placeholder="Academic Year"
                                                    InputProps={{
                                                        style: { height: '40px', fontSize: '13px', color: '#101828' },
                                                    }}
                                                    style={{ marginTop: '10px', borderRadius: '6px', backgroundColor: '#E6E6E6' }}
                                                />
                                            </div>
                                            <div>
                                                <Typography
                                                    variant="body2"
                                                    style={{ fontWeight: 400, fontSize: '12px', color: '#344054' }}
                                                >
                                                    Campus Name
                                                </Typography>
                                                <Field
                                                    as={Select}
                                                    name="campusName"
                                                    displayEmpty
                                                    IconComponent={KeyboardArrowDownIcon}
                                                    style={{
                                                        marginTop: '8px',
                                                        height: '40px',
                                                        fontSize: '14px',
                                                        width: '100%',
                                                    }}
                                                    value={selectedRowData?.cityName || values.cityName}
                                                    onChange={(e) => setFieldValue('capusName', e.target.value)}
                                                >
                                                    <MenuItem value="" disabled>
                                                        Select Campus
                                                    </MenuItem>
                                                    {/* Add more city options as needed */}
                                                </Field>
                                            </div>
                                            <div>
                                                <Typography
                                                    variant="body2"
                                                    style={{ fontWeight: 400, fontSize: '12px', color: '#344054' }}
                                                >
                                                    Campaign Area Name
                                                </Typography>
                                                <Field
                                                    as={Select}
                                                    name="campaignAreaName"
                                                    displayEmpty
                                                    IconComponent={KeyboardArrowDownIcon}
                                                    style={{
                                                        marginTop: '8px',
                                                        height: '40px',
                                                        fontSize: '14px',
                                                        width: '100%',
                                                    }}
                                                    value={selectedRowData?.issuedTo || values.issuedTo}
                                                    onChange={(e) => setFieldValue('campaignAreaName', e.target.value)}
                                                >
                                                    <MenuItem value="" disabled>
                                                        Select Area
                                                    </MenuItem>
                                                    {/* Add more issuedTo options as needed */}
                                                </Field>
                                            </div>
                                            <div>
                                                <Typography
                                                    variant="body2"
                                                    style={{ fontWeight: 400, fontSize: '12px', color: '#344054' }}
                                                >
                                                    Available Application No From
                                                </Typography>
                                                <Field
                                                    as={TextField}
                                                    fullWidth
                                                    name="availableApplicationNoFrom"
                                                    value={selectedRowData?.applicationTo || values.applicationTo}
                                                    variant="outlined"
                                                    placeholder="Application No From"
                                                    InputProps={{ style: { height: '40px', fontSize: '14px', color: '101828' } }}
                                                    style={{ marginTop: '8px' }}
                                                    onChange={(e) => setFieldValue('availableApplicationNoFrom', e.target.value)}
                                                />
                                            </div>
                                            <div>
                                                <Typography
                                                    variant="body2"
                                                    style={{ fontWeight: 400, fontSize: '12px', color: '#344054' }}
                                                >
                                                    Application no from
                                                </Typography>
                                                <Field
                                                    as={TextField}
                                                    fullWidth
                                                    name="applicationFrom"
                                                    value={selectedRowData?.applicationFrom || values.applicationFrom}
                                                    disabled
                                                    variant="outlined"
                                                    placeholder="Application No From"
                                                    InputProps={{ style: { height: '40px', fontSize: '14px', color: '#101828' } }}
                                                    style={{ marginTop: '8px' }}
                                                />
                                            </div>
                                            <div>
                                                <Typography
                                                    variant="body2"
                                                    style={{ fontWeight: 400, fontSize: '12px', color: '#344054' }}
                                                >
                                                    Application No To
                                                </Typography>
                                                <Field
                                                    as={TextField}
                                                    fullWidth
                                                    name="applicationTo"
                                                    value={selectedRowData?.applicationTo || values.applicationTo}
                                                    variant="outlined"
                                                    placeholder="Application No To"
                                                    InputProps={{ style: { height: '40px', fontSize: '14px', color: '101828' } }}
                                                    style={{ marginTop: '8px' }}
                                                    onChange={(e) => setFieldValue('applicationTo', e.target.value)}
                                                />
                                            </div>
                                            <div>
                                                <Typography
                                                    variant="body2"
                                                    style={{ fontWeight: 400, fontSize: '12px', color: '#344054' }}
                                                >
                                                    Mobile No
                                                </Typography>
                                                <Field
                                                    as={TextField}
                                                    fullWidth
                                                    name="mobileNo"
                                                    value={selectedRowData?.mobileNo || values.mobileNo}
                                                    placeholder="Enter 10 Digit Mobile Number"
                                                    variant="outlined"
                                                    InputProps={{ style: { height: '40px', fontSize: '14px' } }}
                                                    style={{ marginTop: '8px' }}
                                                    onChange={(e) => setFieldValue('mobileNo', e.target.value)}
                                                />
                                            </div>


                                        </div>
                                        <div
                                            className="right-column"
                                            style={{ flex: 1, display: 'grid', gap: '7px' }}
                                        >
                                            <div>
                                                <Typography
                                                    variant="body2"
                                                    style={{ fontWeight: 400, fontSize: '12px', color: '#344054' }}
                                                >
                                                    City Name
                                                </Typography>
                                                <Field
                                                    as={Select}
                                                    name="cityName"
                                                    displayEmpty
                                                    IconComponent={KeyboardArrowDownIcon}
                                                    style={{
                                                        marginTop: '8px',
                                                        height: '40px',
                                                        fontSize: '14px',
                                                        width: '100%',
                                                    }}
                                                    value={selectedRowData?.cityName || values.cityName}
                                                    onChange={(e) => setFieldValue('cityName', e.target.value)}
                                                >
                                                    <MenuItem value="" disabled>
                                                        Select City
                                                    </MenuItem>
                                                    {/* Add more city options as needed */}
                                                </Field>
                                            </div>
                                            <div>
                                                <Typography
                                                    variant="body2"
                                                    style={{ fontWeight: 400, fontSize: '12px', color: '#344054' }}
                                                >
                                                    Campaign District Name
                                                </Typography>
                                                <Field
                                                    as={Select}
                                                    name="campusDistrictName"
                                                    displayEmpty
                                                    IconComponent={KeyboardArrowDownIcon}
                                                    style={{
                                                        marginTop: '8px',
                                                        height: '40px',
                                                        fontSize: '14px',
                                                        width: '100%',
                                                    }}
                                                    value={selectedRowData?.zoneName || values.zoneName}
                                                    onChange={(e) => setFieldValue('campusDistrictName', e.target.value)}
                                                >
                                                    <MenuItem value="" disabled>
                                                        Select District
                                                    </MenuItem>
                                                    <MenuItem value="Campus">District</MenuItem>
                                                    {/* Add more zone options as needed */}
                                                </Field>
                                            </div>
                                            <div>
                                                <Typography
                                                    variant="body2"
                                                    style={{ fontWeight: 400, fontSize: '12px', color: '#344054' }}
                                                >
                                                    Issued To
                                                </Typography>
                                                <Field
                                                    as={Select}
                                                    name="issuedTo"
                                                    displayEmpty
                                                    IconComponent={KeyboardArrowDownIcon}
                                                    style={{
                                                        marginTop: '8px',
                                                        height: '40px',
                                                        fontSize: '14px',
                                                        width: '100%',
                                                    }}
                                                    value={selectedRowData?.issuedTo || values.issuedTo}
                                                    onChange={(e) => setFieldValue('issuedTo', e.target.value)}
                                                >
                                                    <MenuItem value="" disabled>
                                                        Issue To
                                                    </MenuItem>
                                                    {/* Add more issuedTo options as needed */}
                                                </Field>
                                            </div>

                                            <div>
                                                <Typography
                                                    variant="body2"
                                                    style={{ fontWeight: 400, fontSize: '12px', color: '#344054' }}
                                                >
                                                    Available App no To
                                                </Typography>
                                                <Field
                                                    as={TextField}
                                                    fullWidth
                                                    name="AvailableAppNoTo"
                                                    value={selectedRowData?.applicationTo || values.applicationTo}
                                                    disabled
                                                    variant="outlined"
                                                    placeholder="Available App No To"
                                                    InputProps={{ style: { height: '40px', fontSize: '14px', color: '#101828' } }}
                                                    style={{ marginTop: '8px' }}
                                                />
                                            </div>
                                            <div>
                                                <Typography
                                                    variant="body2"
                                                    style={{ fontWeight: 400, fontSize: '12px', color: '#344054' }}
                                                >
                                                    Range
                                                </Typography>
                                                <Field
                                                    as={Select}
                                                    name="range"
                                                    displayEmpty
                                                    IconComponent={KeyboardArrowDownIcon}
                                                    style={{
                                                        marginTop: '8px',
                                                        height: '40px',
                                                        fontSize: '14px',
                                                        width: '100%',
                                                    }}
                                                    value={selectedRowData?.range || values.range}
                                                    onChange={(e) => setFieldValue('range', e.target.value)}
                                                >
                                                    <MenuItem value="" disabled>
                                                        Select Range
                                                    </MenuItem>
                                                    {/* Add more range options as needed */}
                                                </Field>
                                            </div>
                                            <div>
                                                <Typography
                                                    variant="body2"
                                                    style={{ fontWeight: 400, fontSize: '12px', color: '#344054' }}
                                                >
                                                    Issue Date
                                                </Typography>
                                                <Field
                                                    as={TextField}
                                                    fullWidth
                                                    name="issueDate"
                                                    type="date"
                                                    variant="outlined"
                                                    placeholder="Issue Date"
                                                    InputProps={{ style: { height: '40px', fontSize: '14px' } }}
                                                    style={{ marginTop: '8px' }}
                                                    value={selectedRowData?.issueDate || values.issueDate}
                                                    onChange={(e) => setFieldValue('issueDate', e.target.value)}
                                                />
                                            </div>                                        </div>
                                    </div>
                                    <div
                                        className="submit-button"
                                        style={{
                                            marginTop: '16px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            borderRadius: '6px',
                                        }}
                                    >
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="submit"
                                            style={{
                                                backgroundColor: '#3425FF',
                                                textTransform: 'none',
                                                fontSize: '12px',
                                                gap: '4px',
                                                width: '130px',
                                            }}
                                        >
                                            Insert <ArrowForwardIcon />
                                        </Button>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
                <div
                    className="right-panel"
                    style={{
                        flex: 0.3,
                        boxSizing: 'border-box',
                        width: '25%',
                    }}
                >
                    <div
                        className="right-content"
                        style={{
                            borderLeft: '1px solid #ccc',
                            height: '100%',
                            padding: '10px',
                        }}
                    >
                        <div>Right Panel Content</div>
                    </div>
                </div>
            </div>
            <div style={{ width: '100%' }}>
                <CampusTable onUpdate={handleUpdateFromTable} />
            </div>
        </div>
    );
};

export default CampusApplication;