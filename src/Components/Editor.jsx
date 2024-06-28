import React, { useState } from "react";
import PropTypes from 'prop-types';
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons';

const Editor = (props) => {
    const { displayName, language, value, onChangeHandler } = props;
    const handleChange = (editor, data, value) => {
        onChangeHandler(value);
    };

    const [open, setOpen] = useState(true);

    return (
        <div className={`editor-container ${open? "":"collapsed"}`}>
            <div className="editor-title">
                {displayName}
                <button
                    type="button"
                    className="expand-collapse-btn"
                    onClick={() => {
                    !open ? setOpen(true):setOpen(false)
                }}>
                    <FontAwesomeIcon icon={open?faCompressAlt:faExpandAlt}/>
                </button>
            </div>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: 'material',
                    lineNumbers: true,
                }}
            />
        </div>
    );
};

Editor.propTypes = {
    displayName: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Editor;

