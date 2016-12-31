import ImportAsMember.C

// SIL-LABEL: sil {{.*}}readSemiModularPowerSupply{{.*}}
public func readSemiModularPowerSupply() -> CCPowerSupply {
  // TODO: actual body
  // FIXME: this asserts
  return CCPowerSupply.semiModular
}
