import { icons } from "./icons"

const Icon = ({ icon, ...iconProps }) => {
    const LucideIcon = icons[icon] ? icons[icon] : null;

    return (
        LucideIcon ?
            <LucideIcon {...iconProps} />
            :
            <></>
    )
}

export default Icon;