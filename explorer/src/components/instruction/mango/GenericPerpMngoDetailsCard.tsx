import { SignatureResult, TransactionInstruction } from "@solana/web3.js";
import { Address } from "components/common/Address";
import { InstructionCard } from "../InstructionCard";
import { getPerpMarketFromInstruction } from "./types";

export function GenericPerpMngoDetailsCard(props: {
  ix: TransactionInstruction;
  index: number;
  result: SignatureResult;
  mangoAccountKeyLocation: number;
  perpMarketKeyLocation: number;
  title: String;
  innerCards?: JSX.Element[];
  childIndex?: number;
  readable: any;
}) {
  const {
    ix,
    index,
    result,
    mangoAccountKeyLocation,
    perpMarketKeyLocation,
    title,
    innerCards,
    childIndex,
    readable,
  } = props;
  const mangoAccount = ix.keys[mangoAccountKeyLocation];
  const perpMarketAccountMeta = ix.keys[perpMarketKeyLocation];
  const mangoPerpMarketConfig = getPerpMarketFromInstruction(
    ix,
    perpMarketAccountMeta
  );

  return (
    <InstructionCard
    readable={readable}
      ix={ix}
      index={index}
      result={result}
      title={"Mango Program: " + title}
      innerCards={innerCards}
      childIndex={childIndex}
    >
      <tr>
        <td>Mango account</td>
        <td>
          <Address pubkey={mangoAccount.pubkey} alignRight link />
        </td>
      </tr>

      {mangoPerpMarketConfig !== undefined && (
        <tr>
          <td>Perp market</td>
          <td className="text-lg-end">{mangoPerpMarketConfig.name}</td>
        </tr>
      )}

      <tr>
        <td>Perp market address</td>
        <td>
          <Address pubkey={perpMarketAccountMeta.pubkey} alignRight link />
        </td>
      </tr>
    </InstructionCard>
  );
}
