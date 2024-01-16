import HomeCrums from "../../Shared/HomeCrums";
import MenuContainerLayout from "../../Shared/MenuContainerLayout";
import MenuHeader from "../../Shared/MenuHeader";
import Spacer from "../../Shared/Spacer";

const TresumeEmployeeCreate = () => {
    return (
        <>
            <MenuContainerLayout>
                <Spacer type={"extra-large"} />
                <MenuHeader />
                <Spacer type={"extra-small"} />
                <HomeCrums
                    name={"Panel Wsparcia"}
                    link={localUrl + "/profile/support"}
                />
                <Spacer type={"extra-large"} />
                <ShHeader title={"Zarządzanie Opcjami Filtrowania"} />
                <Spacer type={"small"} />
                <ShSubHeader>Umożliwia definiowanie nowych filtrów</ShSubHeader>
                <Spacer type={"extra-large"} />
                <Main options={options} />
                <Spacer type={"extra-large"} />
            </MenuContainerLayout>
        </>
    );
};

export default TresumeEmployeeCreate;
