import React from "react";
import {
  TransactionInstruction,
  SignatureResult,
  ParsedInstruction,
} from "@solana/web3.js";
import { InstructionCard } from "./InstructionCard";
import { getProgramName, PROGRAM_NAMES } from "utils/tx";
import { useCluster } from "providers/cluster";

export function UnknownDetailsCard({
  ix,
  index,
  result,
  innerCards,
  childIndex,
  readable,
}: {
  ix: TransactionInstruction | ParsedInstruction;
  index: number;
  result: SignatureResult;
  innerCards?: JSX.Element[];
  childIndex?: number;
  readable: any;
}) {
  const { cluster } = useCluster();
  const programName = getProgramName(ix.programId.toBase58(), cluster);
  let titleSuffix = `: Unknown Instruction`;
  if (programName === PROGRAM_NAMES.MAGIC_EDEN) {
    // TODO: Use actual instruction here
    titleSuffix = '';
  }
  return (
    <InstructionCard
      readable={readable}
      ix={ix}
      index={index}
      result={result}
      title={`${programName}${titleSuffix}`}
      innerCards={innerCards}
      childIndex={childIndex}
      defaultRaw
    />
  );
}
