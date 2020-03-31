import React from "react";

const ReposComp = props => {
  const {
    name,
    html_url,
    description,
    stargazers_count,
    watchers_count,
    forks_count,
    language,
    updated_at,
    license
  } = props.repo;

  const uDate = updated_at.split("-");

  return (
    <div className="repoComp">
      <h1 className="repoName">
        {` ${name} `}
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          <i className="fas fa-external-link-alt" />
        </a>
      </h1>
      {description && <h2 className="repoDescription">{description}</h2>}
      {watchers_count > 0 && (
        <p className="repoOthers" title="Watchers">
          <i className="fas fa-eye" />
          {` ${watchers_count}`}
        </p>
      )}
      {stargazers_count > 0 && (
        <p className="repoOthers" title="Stargazers">
          <i className="fas fa-star" />
          {` ${stargazers_count}`}
        </p>
      )}
      {forks_count > 0 && (
        <p className="repoOthers" title="Forks">
          <i className="fas fa-code-branch" />
          {` ${forks_count}`}
        </p>
      )}
      {license && (
        <p className="repoOthers" title="License">
          <i className="fas fa-balance-scale" />
          {` ${license.name}`}
        </p>
      )}
      {updated_at && (
        <p
          className="repoOthers"
          title={`Last Update: ${uDate[1]}/${uDate[0]}`}
        >
          <i className="far fa-clock" />
          {` ${uDate[1]}/${uDate[0]}`}
        </p>
      )}
      {language && (
        <p className="repoOthers repoRight" title="Language">
          <i className="fas fa-code" />
          {` ${language}`}
        </p>
      )}
    </div>
  );
};

export default ReposComp;
