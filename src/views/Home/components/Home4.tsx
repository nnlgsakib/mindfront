import {  Flex, Text, Heading, Link, Button } from '@metaviralswap/uikit'
import { useWeb3React } from '@web3-react/core'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { useTranslation } from 'contexts/Localization'
import Image from 'next/image'
import CommunityVote from '../../../../public/images/home/Community-Vote.png'
import ColoredWordLastHeading from './ColoredWordLastHeading'

const Home4 = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const  primaryButton = {
    to: '/swap',
    text: 'Buy MTN',
    external: false
  }

  return (
    <>     
      <Flex
        position="relative"
        flexDirection={['column-reverse', null, null, 'row']}
        alignItems={['flex-end', null, null, 'center']}
        justifyContent="center"
        mt={[account ? '280px' : '50px', null, 0]}
        mb='50px'
        id="homepage-home4"
      >
        <Flex flex="1" flexDirection="column">
          <Heading scale="xl" >      
            {t('MetaViralSwap')}
          </Heading>
          <ColoredWordLastHeading color="#000000" text={t('Community Vote')} />          
          <Text color="#000000" fontSize="18px" mb="24px" mt="20px">
            {t('MetaViralSwap is governed by its community members who can create & vote on important proposals')}
          </Text>
          <Flex mt="90px">
            <Button mr="16px">
              <Link external href={primaryButton.to}>
                <Text color="#ffffff" bold fontSize="16px">
                  {primaryButton.text}
                </Text>
              </Link>  
            </Button>
          </Flex>          
        </Flex>
        <Flex
          height={['192px', null, null, '100%']}
          width={['192px', null, null, '100%']}
          flex={[null, null, null, '1']}
          mb={['24px', null, null, '0']}
          position="relative"
        >
          <Image src={CommunityVote} priority placeholder="blur" alt={t('MetaViralSwap')} />
        </Flex>
      </Flex>
    </>
  )
}

export default Home4
