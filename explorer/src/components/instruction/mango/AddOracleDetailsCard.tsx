import { SignatureResult, TransactionInstruction } from "@solana/web3.js";
import { InstructionCard } from "../InstructionCard";

export function AddOracleDetailsCard(props: {
  ix: TransactionInstruction;
  index: number;
  result: SignatureResult;
  innerCards?: JSX.Element[];
  childIndex?: number;
  readable: any;
}) {
  const { ix, index, result, innerCards, childIndex, readable } = props;

  return (
    <InstructionCard
      readable={readable}
      ix={ix}
      index={index}
      result={result}
      title="Mango Program: AddOracle"
      innerCards={innerCards}
      childIndex={childIndex}
    ></InstructionCard>
  );
}
