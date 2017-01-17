export default class Stars extends Component {
    async componentDidMount() {
        let stars = await githubStars(this.props.repo);
        this.setState({ stars });
    }
    render({ repo }, { stars=0 }) {
        let url = `//github.com/${repo}`;
        return (
            <a href={url} class="stars">
                ⭐️ {stars} Stars
            </a>
        );
    }
}
