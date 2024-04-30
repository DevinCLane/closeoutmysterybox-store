import getBillboard from "@/actions/get-billboards";
import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";

export const revalidate = 0;

const HomePage = async () => {
    const billboard = await getBillboard(
        "60a04cbb-b9f5-4ddd-a88f-2a8a56ed1164"
    );
    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />
            </div>
        </Container>
    );
};

export default HomePage;
