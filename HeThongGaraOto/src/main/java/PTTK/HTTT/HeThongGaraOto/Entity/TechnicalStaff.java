package PTTK.HTTT.HeThongGaraOto.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "tbl_technical_staff")
@Entity
public class TechnicalStaff extends User{

    @Column(name = "is_free")
    private boolean isFree;

    @OneToMany(mappedBy = "technicalStaff", cascade = CascadeType.ALL)
    private List<Payroll> payrollLis;

    @OneToMany(mappedBy =  "technicalStaff", cascade = CascadeType.ALL)
    private List<RepairAssignment> repairAssignmentList;
}
