export default class UserInfo {
    constructor({ profileName, profileProfession }) {
        this._userName = profileName;
        this._userJob = profileProfession;
    }

    getUserInfo() {
        return {
            profileName: this._userName.textContent,
            profileProfession: this._userJob.textContent
        }
    }

    setUserInfo(data) {
        this._userName.textContent = data.profileName;
        this._userJob.textContent = data.profileProfession;
    }
}