const SLACK_CLIENT_ID  = process.env.NEXT_PUBLIC_SLACK_CLIENT_ID;
const slackUrl = `https://slack.com/oauth/v2/authorize?user_scope=identity.basic&client_id=${SLACK_CLIENT_ID}`
console.log(SLACK_CLIENT_ID)
console.log(process.env)
function Login() {
    return (
        <div>
            <a href={slackUrl}><img alt="Sign in with Slack" height="40" width="172" src="https://platform.slack-edge.com/img/sign_in_with_slack.png" srcset="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x" /></a>
        </div>
    )
  };
  
  export default Login;
  