import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { loadData } from '../utils/loadData';
import Styled from 'styled-components';

const IssueWrapper = Styled.div`
    max-width: 900px;
    margin: 25px;
`

class Issue extends Component {
    state = {
        issue: []
    }

    async componentDidMount() {
        const { issue_number } = this.props.match.params;
        const url = `https://api.github.com/repos/facebook/create-react-app/issues/${issue_number}`
        const issue = await loadData(url);

        this.setState({
            issue
        })
    }

    render() { 
        const { issue } = this.state;

        return (
            <IssueWrapper>
                <h1 className="title">{issue.title}</h1>
                <div className="morph">
                    <ReactMarkdown
                        source={issue.body}
                        escapeHtml={false}
                    />
                </div>
            </IssueWrapper>
        )
    }
}

export default Issue;