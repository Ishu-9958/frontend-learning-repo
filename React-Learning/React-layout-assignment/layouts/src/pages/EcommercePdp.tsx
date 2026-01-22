import { EcommerceLeft } from "../components/EcommercePdpComponent/EcommerceLeft"
import { EcommerceNav } from "../components/EcommercePdpComponent/EcommerceNav"
import { EcommerceRight } from "../components/EcommercePdpComponent/EcommerceRight";


export const EcommercePdp = () => {
  return (
    <div className="flex flex-col h-full">
      <EcommerceNav/>
      <div className="flex-1 flex overflow-auto">
        <EcommerceLeft/>
        <EcommerceRight/>
      </div>
    </div>
  );
};
