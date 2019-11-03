import React from "react";

export const ErrMessage = ({msg}) => {
    return  <div className="alert alert-secondary" role="alert">
                {msg}
            </div>
};

export const LoadingMessage = ({msg}) => {
    return  <div className="alert alert-primary" role="alert">
                {msg}
            </div>
};