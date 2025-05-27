import Typography from "../../../../components/ui/Typography"

export default function ReferTypography() {
    return (
        <div className="space-y-10">

            <section className="space-y-6">
                <Typography variant="h1" animated>Typography Examples</Typography>

                <div className="space-y-4">
                    <Typography variant="h2">Heading Variants</Typography>
                    <div className="grid gap-4 border p-6 rounded-lg">
                        <Typography variant="h1">Heading 1</Typography>
                        <Typography variant="h2">Heading 2</Typography>
                        <Typography variant="h3">Heading 3</Typography>
                        <Typography variant="h4">Heading 4</Typography>
                        <Typography variant="h5">Heading 5</Typography>
                        <Typography variant="h6">Heading 6</Typography>
                    </div>
                </div>

                <div className="space-y-4">
                    <Typography variant="h2">Text Variants</Typography>
                    <div className="grid gap-4 border p-6 rounded-lg">
                        <Typography variant="subtitle1">Subtitle 1</Typography>
                        <Typography variant="subtitle2">Subtitle 2</Typography>
                        <Typography variant="body1">Body 1 - Main text for content</Typography>
                        <Typography variant="body2">Body 2 - Secondary text content</Typography>
                        <Typography variant="button">Button Text</Typography>
                        <Typography variant="caption">Caption Text - Small notes or labels</Typography>
                        <Typography variant="overline">Overline Text</Typography>
                    </div>
                </div>

                <div className="space-y-4">
                    <Typography variant="h2">Color Variants</Typography>
                    <div className="grid gap-4 border p-6 rounded-lg">
                        <Typography color="primary">Primary Color</Typography>
                        <Typography color="secondary">Secondary Color</Typography>
                        <Typography color="tertiary">Tertiary Color</Typography>
                        <Typography color="accent">Accent Color</Typography>
                        <Typography color="success">Success Color</Typography>
                        <Typography color="warning">Warning Color</Typography>
                        <Typography color="error">Error Color</Typography>
                        <Typography color="info">Info Color</Typography>
                    </div>
                </div>

                <div className="space-y-4">
                    <Typography variant="h2">Font Weight</Typography>
                    <div className="grid gap-4 border p-6 rounded-lg">
                        <Typography weight="thin">Thin Weight</Typography>
                        <Typography weight="light">Light Weight</Typography>
                        <Typography weight="normal">Normal Weight</Typography>
                        <Typography weight="medium">Medium Weight</Typography>
                        <Typography weight="semibold">Semibold Weight</Typography>
                        <Typography weight="bold">Bold Weight</Typography>
                        <Typography weight="extrabold">Extra Bold Weight</Typography>
                        <Typography weight="black">Black Weight</Typography>
                    </div>
                </div>

                <div className="space-y-4">
                    <Typography variant="h2">Text Alignment</Typography>
                    <div className="grid gap-4 border p-6 rounded-lg">
                        <Typography align="left">Left Aligned Text</Typography>
                        <Typography align="center">Center Aligned Text</Typography>
                        <Typography align="right">Right Aligned Text</Typography>
                        <Typography align="justify">Justify Aligned Text - This is a longer text to demonstrate justified alignment. It will stretch to fill the entire width of its container.</Typography>
                    </div>
                </div>

                <div className="space-y-4">
                    <Typography variant="h2">Animated Text</Typography>
                    <div className="grid gap-4 border p-6 rounded-lg">
                        <Typography variant="h3" animated>Animated Heading</Typography>
                        <Typography variant="body1" animated>Animated Body Text</Typography>
                    </div>
                </div>
            </section>
        </div>
    )
}