import styled from 'styled-components';
import { Orders, Stat } from '@liqnft/candy-shop';
import { ConnectButton } from '@/components/ConnectButton';
import { useUserWallet } from '@/hooks/useUserWallet';
import { useShopStore } from '@/store/useShopStore';

const Marketplace: React.FC = () => {
  const candyShop = useShopStore((s) => s.candyShop);
  const userWallet = useUserWallet();

  if (!candyShop) return null;

  return (
    <DesContainer>
      <Stat
        candyShop={candyShop}
        title={'Certificate Collections'}
        description={
          'Secure_Certify provides a way to securely issue and manage Certificates!'
        }
        style={{ paddingBottom: 50 }}
      />

      <Orders
        wallet={userWallet}
        candyShop={candyShop}
        walletConnectComponent={<ConnectButton />}
        search
      />
    </DesContainer>
  );
};

export default Marketplace;
const DesContainer = styled.div`
  width: 100%;
`;
