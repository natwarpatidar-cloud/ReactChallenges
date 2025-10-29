export default function ProgressBar({ width }) {
    return (
        <div className="container">
            <div className="innerContainer" style={{width: `${width}%`}}>
                {width}%
            </div>
        </div>
    )
}