import ProfileImage from "./ui/ProfileImage"
import { Dropdown, DropdownTrigger, DropdownContent, DropdownItem } from "@/shared/ui/Dropdown/Dropdown"

const HeaderUserProfile = () => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <ProfileImage size="sm"/>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem>
          내 정보
        </DropdownItem>
        <DropdownItem>
          로그아웃
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  )
}

export default HeaderUserProfile;